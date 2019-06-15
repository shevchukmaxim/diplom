import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import { Card, CardBody } from "shards-react";

import {getEmployees} from "../../actions/employees";

class EmployeesCounter extends React.Component {

  componentDidMount() {
    this.props.getEmployees();
    };

  render() {
    const value = this.props.employees.length;
    return (
      <Card small className="stats-small">
        <CardBody className="p-0 d-flex">
            <div className="d-flex flex-column m-auto stats-small__data text-center">
              <Link to="/employees">
                <span className="stats-small__label text-uppercase">Сотрудники</span>
              </Link>
              <h6 className="stats-small__value count my-3">{value}</h6>
            </div>
        </CardBody>
      </Card>
    );
  }
}

EmployeesCounter.propTypes = {
  employees: PropTypes.array.isRequired,
  getEmployees: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  employees: state.employees.employees
});

export default connect(mapStateToProps, {getEmployees})(EmployeesCounter);
