import React from "react";

import { Container, Row } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import EmployeesTable from "../components/employees/EmployeesTable";
import {getEmployees, deleteEmployee, addEmployee, updateEmployee} from "../actions/employees";
import {getDepartments} from "../actions/departments";
import {connect} from "react-redux";

class Employees extends React.Component {

  componentDidMount() {
    this.props.getDepartments();
    this.props.getEmployees();
  };

  render() {
    return (

    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Сотрудники" subtitle="Список всех сотрудников" className="text-sm-left" />
      </Row>
      <EmployeesTable employees = {this.props.employees} departments = {this.props.departments}/>
    </Container>
    );
  }
}

const mapStateToProps = state => ({
  departments: state.departments.departments,
  employees: state.employees.employees,
});

export default connect(mapStateToProps, {addEmployee, getEmployees, deleteEmployee, updateEmployee, getDepartments})(Employees);
