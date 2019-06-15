import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import LessonDetails from "../components/single-lesson/LessonDetails";
import LessonDiagramm from "../components/single-lesson/LessonDiagramm";
import LessonTable from "../components/single-lesson/LessonTable";
import LessonAddGroup from "../components/single-lesson/LessonAddGroup";
import {connect} from "react-redux";
import {deleteLesson, getLesson} from "../actions/lessons";
import {getLessonsEmployees} from "../actions/lessons_employees";
import {getEmployees} from "../actions/employees";
import {getGroups} from "../actions/groups";
import PropTypes from "prop-types";

class SingleLesson extends React.Component {

  static propTypes = {
    lesson: PropTypes.object.isRequired,
    getLesson: PropTypes.func.isRequired,
    deleteLesson: PropTypes.func.isRequired,
    getLessonsEmployees: PropTypes.func.isRequired,
    lessonsEmployees: PropTypes.array.isRequired,
    groups: PropTypes.array.isRequired,
    getGroups: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getLesson(parseInt(this.props.match.params.id));
    this.props.getLessonsEmployees();
    this.props.getEmployees();
    this.props.getGroups();
  };

  render() {
    const addGroup = <Row>
      <Col md="4">
        <LessonAddGroup groups = {this.props.groups} lessonsEmployees = {this.props.lessonsEmployees} employees = {this.props.employees} lesson = {this.props.lesson}/>
      </Col>
    </Row>;
    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle title="Занятие" subtitle="Обзор" md="12" className="ml-sm-auto mr-sm-auto" />
        </Row>
        <Row>
          <Col lg="8" md="12">
            <LessonDetails lesson = {this.props.lesson} lesson_id={this.props.match.params.id} lessonsEmployees = {this.props.lessonsEmployees}/>
          </Col>
          <Col lg="4" md="12" className="mb-2">
            <LessonDiagramm lesson_id={this.props.match.params.id}/>
          </Col>
        </Row>
        {this.props.auth.user.is_superuser ? addGroup : ''}
        <Row className="mt-0">
          <Col md="12">
            <LessonTable lessonsEmployees = {this.props.lessonsEmployees} employees = {this.props.employees} lesson = {this.props.lesson}/>
          </Col>
        </Row>

      </Container>
    );
  }
}

const mapStateToProps = state => ({
  lesson: state.lessons.lesson,
  lessonsEmployees: state.lessons_employees.lessonsEmployees,
  employees: state.employees.employees,
  groups: state.group.groups,
  auth: state.auth
});

export default connect(mapStateToProps, {getEmployees, deleteLesson, getLesson, getLessonsEmployees, getGroups})(SingleLesson);
