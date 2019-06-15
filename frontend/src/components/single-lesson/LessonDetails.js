import React from "react";
import {connect} from 'react-redux';
import { Link, Redirect, withRouter} from "react-router-dom";
import PropTypes from "prop-types";

import {Row, Col, Card, CardHeader, CardBody, Button, ListGroup, ListGroupItem, Progress} from "shards-react";

import {deleteLesson, getLesson, updateLesson} from "../../actions/lessons";
import {getLessonsEmployees} from "../../actions/lessons_employees";
import {LessonsForm} from "../lessons/LessonsForm";

class LessonDetails extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      isEditing: false,
      lesson: this.props.lesson,
      lessonsEmployees: this.props.lessonsEmployees,
    };
    this.updateLessonState = this.updateLessonState.bind(this);
    this.deleteLesson = this.deleteLesson.bind(this);
    this.saveLesson = this.saveLesson.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
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
  };

  static propTypes = {
    /**
     * The small stats dataset.
     */
    lesson: PropTypes.array.isRequired,
    getLesson: PropTypes.func.isRequired,
    deleteLesson: PropTypes.func.isRequired,
    getLessonsEmployees: PropTypes.func.isRequired,
    lessonsEmployees: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getLessonsEmployees();
  };



  render() {
    var participation = 0;
    var allstudents = 0;
    const changeButton =  <Button onClick={this.toggleEdit} pill outline size="sm" className="mb-2">
      <i className="material-icons mr-1">edit</i> Изменить
    </Button>;
    this.state.lessonsEmployees.map((lesson, index) => {
        allstudents++;
        if (lesson.participation)
          participation++;
    });
    const participationPercent = Math.round(participation/allstudents*100);
    if (this.state.isEditing) {
      return (
        <LessonsForm
          lesson={this.state.lesson}
          onSave={this.saveLesson}
          onChange={this.updateLessonState}
          onToggle={this.toggleEdit}
          onDelete={this.deleteLesson}
        />
      )
    }
    return (
      <Card small className="mb-4 pt-3">
        <CardHeader className="border-bottom text-center">
          <h4 className="mb-0">{this.state.lesson.title}</h4>
          <span className="text-muted d-block mb-2">{this.state.lesson.theme}</span>
          {this.props.auth.user.is_superuser ? changeButton : ''}
        </CardHeader>
        <ListGroup flush>
          <ListGroupItem className="px-4">
            <div className="progress-wrapper">
              <strong className="text-muted d-block mb-2">
                Посещаемость
              </strong>
              <Progress
                className="progress-sm"
                value={participationPercent}
                animated
              >
                  <span className="progress-value">
                    {participationPercent}%
                  </span>
              </Progress>
            </div>
          </ListGroupItem>
          <ListGroupItem className="p-4">
            <strong className="text-muted d-block mb-2">
              Описание
            </strong>
            <span>{this.state.lesson.description}</span>
          </ListGroupItem>
        </ListGroup>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  var lessonsEmployees = state.lessons_employees.lessonsEmployees ? state.lessons_employees.lessonsEmployees.filter(lesson => lesson.lesson === state.lessons.lesson.id) : console.log('') ;
  return({
    lesson: state.lessons.lesson,
    lessonsEmployees: lessonsEmployees,
    auth: state.auth
  })
};
export default connect(mapStateToProps, {deleteLesson, getLesson, getLessonsEmployees, updateLesson})(withRouter(LessonDetails));