import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import EmployeeDetails from "../components/single-employee/EmployeeDetails";
import EmployeesLessonsTable from "../components/single-employee/EmployeesLessonsTable";
import {connect} from "react-redux";
import {getEmployee} from "../actions/employees";
import {getLessonsEmployees} from "../actions/lessons_employees";
import PropTypes from "prop-types";
import EmployeesForm from "../components/employees/EmployeesForm";
import EmployeeStats from "../components/single-employee/EmployeeStats";
import EmployeeGraph from "../components/single-employee/EmployeeGraph";

class EmployeeProfile extends React.Component {

  static propTypes = {
    getEmployee: PropTypes.func.isRequired,
    getLessonsEmployees: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getEmployee(parseInt(this.props.match.params.id));
    this.props.getLessonsEmployees();
  };

  render() {
    return (
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle title="Профиль сотрудника" subtitle="Сотрудник" md="12" className="ml-sm-auto mr-sm-auto"/>
      </Row>

      <Row>
        <Col md="8">
          <EmployeeDetails employee={this.props.employee} lessons = {this.props.lessonsEmployees}/>
        </Col>
        <Col md="4">
          <EmployeeStats lessons = {this.props.lessonsEmployees}></EmployeeStats>
        </Col>
      </Row>
      <Row>
        <Col md="12" className="mb-2">
          <EmployeeGraph/>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <EmployeesLessonsTable lessons = {this.props.lessonsEmployees}/>
        </Col>
      </Row>
    </Container>
    );
  }
}

const mapStateToProps = state => {
  var lessonsEmployees = state.lessons_employees.lessonsEmployees ? state.lessons_employees.lessonsEmployees.filter(lesson => lesson.employee === state.employees.employee.emp_no) : console.log('');

  return ({
    employee: state.employees.employee,
    lessonsEmployees: lessonsEmployees,
  });
};

export default connect(mapStateToProps, {getEmployee, getLessonsEmployees})(EmployeeProfile);
