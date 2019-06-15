import React from "react";
import {connect} from 'react-redux';
import { Link, Redirect, withRouter} from "react-router-dom";
import PropTypes from "prop-types";

import {Row, Col, Card, CardHeader, CardBody, Button, ListGroup, ListGroupItem, Progress} from "shards-react";

import {deleteLesson, getLesson, updateLesson} from "../../actions/lessons";
import {getLessonsEmployees, addLessonEmployee} from "../../actions/lessons_employees";
import {getGroupsEmployees} from "../../actions/groups_employees";
import {LessonsGroupForm} from "../lessons/LessonsGroupForm";

class LessonAddGroup extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      isEditing: false,
      lesson: this.props.lesson,
      lessonsEmployees: this.props.lessonsEmployees,
      groups: this.props.groups,
      selectedGroup: ""
    };
    this.updateLessonState = this.updateLessonState.bind(this);
    this.deleteLesson = this.deleteLesson.bind(this);
    this.saveLesson = this.saveLesson.bind(this);
    this.addGroup = this.addGroup.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing})
  };

  updateLessonState(event) {
    const field = event.target.name ? event.target.name : 'description';
    const lesson = this.state.lesson;
    lesson[field] = event.target.value;
    return this.setState({lesson: lesson});
  };

  deleteLesson(event) {
    var check = confirm('Вы уверены что хотите удалить занятие?');
    if (check){
      this.props.deleteLesson(this.state.lesson.id, this.props.history)
    }
  };

  handleChange = (selectedGroup) => {
    return this.setState({ selectedGroup: selectedGroup });
  };

  addGroup(event) {
    event.preventDefault();
    const lessonid = this.props.match.params.id;
    const groupid = this.state.selectedGroup.value;
    const empGroup = this.props.groupsEmployees;
    const empsFromGroup = empGroup.filter(grp => grp.group === groupid);
    empsFromGroup.map((emp) => {
      const emps = {lesson:lessonid, employee: emp.employee};
      this.props.addLessonEmployee(emps);
    });
  };

  saveLesson(event) {
    event.preventDefault();
    this.props.updateLesson(this.state.lesson.id,this.state.lesson);
    this.setState({isEditing: !this.state.isEditing});
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.lesson != nextProps.lesson){
      this.setState({lesson: nextProps.lesson})
    }
    if (this.props.lessonsEmployees != nextProps.lessonsEmployees) {
      this.setState({lessonsEmployees: nextProps.lessonsEmployees})
    }
    if (this.props.groups != nextProps.groups) {
      this.setState({groups: nextProps.groups})
    }
    if (this.props.groupsEmployees != nextProps.groupsEmployees) {
      this.setState({groups: nextProps.groupsEmployees})
    }
  };

  static propTypes = {
    /**
     * The small stats dataset.
     */
    lesson: PropTypes.array.isRequired,
    getLesson: PropTypes.func.isRequired,
    deleteLesson: PropTypes.func.isRequired,
    getLessonsEmployees: PropTypes.func.isRequired,
    lessonsEmployees: PropTypes.array.isRequired,
    groups: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getLessonsEmployees();
    this.props.getGroupsEmployees();
  };

  render() {
    var participation = 0;
    var allstudents = 0;
    const changeButton =  <Button onClick={this.toggleEdit} pill outline size="sm" className="mb-2">
      <i className="material-icons mr-1">edit</i> Добавить
    </Button>;
    this.state.lessonsEmployees.map((lesson, index) => {
      allstudents++;
      if (lesson.participation)
        participation++;
    });
    const participationPercent = Math.round(participation/allstudents*100);
    if (this.state.isEditing) {
      return (
        <LessonsGroupForm
          lesson={this.state.lesson}
          groups={this.state.groups}
          onSave={this.saveLesson}
          onSaveGroup={this.addGroup}
          handleChange={this.handleChange}
          selectedGroup={this.state.selectedGroup}
          onChange={this.updateLessonState}
          onToggle={this.toggleEdit}
          onDelete={this.deleteLesson}
        />
      )
    }
    return (
      <Card small className="pt-3">
        <CardHeader className="border-bottom text-center">
          <span className="text-muted d-block mb-2">Добавить группу</span>
          {this.props.auth.user.is_superuser ? changeButton : ''}
        </CardHeader>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  var lessonsEmployees = state.lessons_employees.lessonsEmployees ? state.lessons_employees.lessonsEmployees.filter(lesson => lesson.lesson === state.lessons.lesson.id) : console.log('') ;
  return{
    lesson: state.lessons.lesson,
    lessonsEmployees: lessonsEmployees,
    auth: state.auth,
    groups: state.group.groups,
    groupsEmployees: state.group_employee.groupsEmployees
  }
};
export default connect(mapStateToProps, {addLessonEmployee, getGroupsEmployees, deleteLesson, getLesson, getLessonsEmployees, updateLesson})(withRouter(LessonAddGroup));