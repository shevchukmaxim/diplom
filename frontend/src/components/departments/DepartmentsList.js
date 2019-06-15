import React from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


import { Row, Col, Card, CardHeader, CardBody } from "shards-react";

import {getDepartments, deleteDepartment} from "../../actions/departments";

class DepartmentsList extends React.Component {
  static propTypes = {
    /**
     * The small stats dataset.
     */
    departments: PropTypes.array.isRequired,
    getDepartments: PropTypes.func.isRequired,
    deleteDepartment: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getDepartments()
  };

  render() {
    return (
      <Row>
        {this.props.departments.map(department => (
          <Col lg="3" key={department.dept_no}>
            <Card small className="card-post mb-3 text-center">
              <CardBody>
                <Link to={`/department/${department.dept_no}`}>
                  <h5 className="card-title">{department.dept_name}</h5>
                </Link>
                <p className="cart-text">Сотрудников: {department.employees_count}</p>
                <button
                  onClick={this.props.deleteDepartment.bind(this, department.dept_no)}
                  className="btn btn-danger btn-sm"
                >
                  {" "}
                  Удалить
                </button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  departments: state.departments.departments
});

export default connect(mapStateToProps, {getDepartments, deleteDepartment})(DepartmentsList);