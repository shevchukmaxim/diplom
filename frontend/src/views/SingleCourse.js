import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import CoursDetails from "../components/single-cours/CoursDetails";
import CoursTable from "../components/single-cours/CoursTable";
import CoursLessonsTable from "../components/single-cours/CoursLessonsTable";
import {connect} from "react-redux";
import {deleteLesson, getLesson} from "../actions/lessons";
import {getLessonsEmployees} from "../actions/lessons_employees";
import {getCoursesEmployees} from "../actions/courses_employees";
import {getCoursesLessons} from "../actions/courses_lessons";
import {getEmployees} from "../actions/employees";
import {getCours} from "../actions/courses";
import PropTypes from "prop-types";
import CoursStats from "../components/single-cours/CoursStats";
import CoursAddStudent from "../components/single-cours/CoursAddStudent";
import CoursAddDepartment from "../components/single-cours/CoursAddDepartmentt";
import CoursAddGroup from "../components/single-cours/CoursAddGroup";

class SingleCourse extends React.Component {

  static propTypes = {
    cours: PropTypes.object.isRequired,
    getCours: PropTypes.func.isRequired,
    getCoursesEmployees: PropTypes.func.isRequired,
    getCoursesLessons: PropTypes.func.isRequired,
    getLessonsEmployees: PropTypes.func.isRequired,
    lessonsEmployees: PropTypes.array.isRequired,
    groups: PropTypes.array.isRequired,
    getGroups: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getCours(parseInt(this.props.match.params.id));
    this.props.getCoursesEmployees();
    this.props.getCoursesLessons();
    this.props.getEmployees();
    this.props.getLessonsEmployees();
  };

  render() {
    const coursID = parseInt(this.props.match.params.id);
    const allEmployees = this.props.coursesEmployees.filter(course => course.cours === coursID);
    const coursInfo = this.props.cours;
    const allLesons = this.props.coursesLessons.filter(course => course.cours === coursID);
    const lessonsCount = allLesons.length;
    const allLesonsEmps = this.props.lessonsEmployees.filter(lesson => lesson.lesson_cours === coursID);

    const addGroup = <Row>
      <Col md="2">
        <CoursAddGroup employees = {this.props.employees} coursID = {coursID} cours = {this.props.cours} coursesLessons = {allLesons}/>
      </Col>
      <Col md="4">
        <CoursAddStudent employees = {this.props.employees} coursID = {coursID} cours = {this.props.cours} coursesLessons = {allLesons}/>
      </Col>
      <Col md="2">
        <CoursAddDepartment employees = {this.props.employees} coursID = {coursID} cours = {this.props.cours} coursesLessons = {allLesons}/>
      </Col>
    </Row>;

    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle title="Курс" subtitle="Обзор" md="12" className="ml-sm-auto mr-sm-auto" />
        </Row>
        <Row>
          <Col md="8">
            <CoursDetails cours = {this.props.cours} cours_id={parseInt(this.props.match.params.id)} coursesEmployees = {this.props.coursesEmployees}/>
          </Col>
          <Col md="4">
            <CoursStats cours = {this.props.cours} coursesEmployees = {allEmployees} coursesLessons = {allLesons}/>
          </Col>
        </Row>
        {this.props.auth.user.is_superuser ? addGroup : ''}
        <Row className="mt-0">
          <Col md="8">
            <CoursTable coursesEmployees = {allEmployees} cours = {this.props.cours} lessonsEmps = {allLesonsEmps} lessonsCount = {lessonsCount} coursesLessons = {allLesons}/>
          </Col>
          <Col md="4">
            <CoursLessonsTable coursesLessons = {this.props.coursesLessons} employees = {this.props.employees} cours = {this.props.cours}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  lesson: state.lessons.lesson,
  coursesEmployees: state.courses_employees.coursesEmployees,
  lessonsEmployees: state.lessons_employees.lessonsEmployees,
  coursesLessons: state.courses_lessons.coursesLessons,
  employees: state.employees.employees,
  cours: state.courses.cours,
  auth: state.auth
});

export default connect(mapStateToProps, {getLessonsEmployees, getCoursesLessons, getEmployees, deleteLesson, getLesson, getCoursesEmployees, getCours})(SingleCourse);
