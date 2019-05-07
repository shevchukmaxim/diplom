import React from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";

import { Row, Col, Card, CardHeader, CardBody } from "shards-react";

import {getEmployees, deleteEmployee} from "../../actions/employees";

class EmployeesTable extends React.Component {
  static propTypes = {
    /**
     * The small stats dataset.
     */
    employees: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLead: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getEmployees()
  };

  render() {
    return (
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Таблица сотрудников</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
              <tr>
                <th scope="col" className="border-0">
                  #
                </th>
                <th scope="col" className="border-0">
                  Фамилия
                </th>
                <th scope="col" className="border-0">
                  Имя
                </th>
                <th scope="col" className="border-0">
                  Отчество
                </th>
                <th scope="col" className="border-0">
                  Отдел
                </th>
                <th>
                </th>
              </tr>
              </thead>
              <tbody>
              {this.props.employees.map(employee => (
                <tr key={employee.emp_no}>
                  <td>{employee.emp_no}</td>
                  <td>{employee.last_name}</td>
                  <td>{employee.first_name}</td>
                  <td>{employee.middle_name}</td>
                  <td>{employee.birth_date}</td>
                  <td>
                      <button
                        onClick={this.props.deleteEmployee.bind(this, employee.emp_no)}
                        className="btn btn-danger btn-sm"
                      >
                      {" "}
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
    );
  }
}

const mapStateToProps = state => ({
  employees: state.employees.employees
});

export default connect(mapStateToProps, {getEmployees, deleteEmployee})(EmployeesTable);