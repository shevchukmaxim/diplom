import React from "react";
import {connect} from 'react-redux';
import { Link, Redirect, withRouter} from "react-router-dom";
import PropTypes from "prop-types";

import {Row, Col, Card, CardHeader, CardBody, Button, ListGroup, ListGroupItem, Progress} from "shards-react";

import {deleteCours, getCours, updateCours} from "../../actions/courses";
import {getCoursesEmployees, addCoursEmployee} from "../../actions/courses_employees";
import {addLessonEmployee} from "../../actions/lessons_employees";
import {CoursesEmployeeForm} from "../courses/CoursesEmployeeForm";

class CoursAddGroup extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      isEditing: false,
      coursID: this.props.coursID,
      employees: this.props.employees,
      cours: this.props.cours,
      coursesLessons: this.props.coursesLessons,
      selectedEmployee: ""
    };
    this.addEmployee = this.addEmployee.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChangeEmployee = this.handleChangeEmployee.bind(this);
  };

  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing})
  };

  handleChangeEmployee = (selectedEmployee) => {
    return this.setState({ selectedEmployee: selectedEmployee });
  };

  addEmployee(event) {
    event.preventDefault();
    console.log(this.state);
    const lessons = this.state.coursesLessons;
    const coursid = this.state.cours.id;
    const employeeid = this.state.selectedEmployee.value;
    const emp = {"cours" : coursid, "employee": employeeid};
    this.props.addCoursEmployee(emp);
    lessons.map((item) => {
      const lessons = {lesson:item.lesson, employee: employeeid};
      this.props.addLessonEmployee(lessons);
    });
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.cours != nextProps.cours){
      this.setState({cours: nextProps.cours})
    }
    if (this.props.coursesEmployees != nextProps.coursesEmployees) {
      this.setState({coursesEmployees: nextProps.coursesEmployees})
    }
    if (this.props.groups != nextProps.groups) {
      this.setState({groups: nextProps.groups})
    }
    if (this.props.groupsEmployees != nextProps.groupsEmployees) {
      this.setState({groups: nextProps.groupsEmployees})
    }
    if (this.props.coursID != nextProps.coursID) {
      this.setState({coursID: nextProps.coursID})
    }
    if (this.props.coursesLessons != nextProps.coursesLessons) {
      this.setState({coursesLessons: nextProps.coursesLessons})
    }
  };

  static propTypes = {
    /**
     * The small stats dataset.
     */
    cours: PropTypes.array.isRequired,
    getCours: PropTypes.func.isRequired,
    deleteCours: PropTypes.func.isRequired,
    getCoursesEmployees: PropTypes.func.isRequired,
    coursesEmployees: PropTypes.array.isRequired,
    groups: PropTypes.array.isRequired
  };

  render() {
    const changeButton =  <Button onClick={this.toggleEdit} pill outline size="sm" className="mb-2">
      <i className="material-icons mr-1">edit</i> Добавить
    </Button>;
    if (this.state.isEditing) {
      return (
        <CoursesEmployeeForm
          cours={this.state.cours}
          employees={this.state.employees}
          onSave={this.saveCours}
          onSaveEmployee={this.addEmployee}
          handleChangeEmployee={this.handleChangeEmployee}
          selectedEmployee={this.state.selectedEmployee}
          onChange={this.updateCoursState}
          onToggle={this.toggleEdit}
          onDelete={this.deleteCours}
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
  var coursesEmployees = state.courses_employees.coursesEmployees ? state.courses_employees.coursesEmployees.filter(cours => cours.cours === state.courses.cours.id) : console.log('') ;
  return{
    cours: state.courses.cours,
    coursesEmployees: coursesEmployees,
    auth: state.auth,
    employees: state.employees.employees,
    coursID: state.coursID,
  }
};
export default connect(mapStateToProps, {addCoursEmployee, deleteCours, getCours, getCoursesEmployees, updateCours, addLessonEmployee})(withRouter(CoursAddGroup));