import React from "react";
import {connect} from 'react-redux';
import { Link, Redirect, withRouter} from "react-router-dom";
import PropTypes from "prop-types";

import {Row, Col, Card, CardHeader, CardBody, Button, ListGroup, ListGroupItem, Progress} from "shards-react";

import {deleteCours, getCours, updateCours} from "../../actions/courses";
import {getCoursesEmployees} from "../../actions/courses_employees";
import {CoursesForm} from "../courses/CoursesForm";

class CoursDetails extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      isEditing: false,
      cours: this.props.cours,
      coursesEmployees: this.props.coursesEmployees,
    };
    this.updateCoursState = this.updateCoursState.bind(this);
    this.deleteCours = this.deleteCours.bind(this);
    this.saveCours = this.saveCours.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  };

  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing})
  };

  updateCoursState(event) {
    const field = event.target.name ? event.target.name : 'description';
    const cours = this.state.cours;
    cours[field] = event.target.value;
    return this.setState({cours: cours});
  };

  deleteCours(event) {
    var check = confirm('Вы уверены что хотите удалить курс?');
    if (check){
      this.props.deleteCours(this.state.cours.id, this.props.history)
    }
  };

  saveCours(event) {
    event.preventDefault();
    this.props.updateCours(this.state.cours.id,this.state.cours);
    this.setState({isEditing: !this.state.isEditing});

  };

  componentWillReceiveProps(nextProps) {
    if (this.props.cours != nextProps.cours){
      this.setState({cours: nextProps.cours})
    }
    if (this.props.coursesEmployees != nextProps.coursesEmployees) {
      this.setState({coursesEmployees: nextProps.coursesEmployees})
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
    coursesEmployees: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getCoursesEmployees();
  };



  render() {

    const changeButton =  <Button onClick={this.toggleEdit} pill outline size="sm" className="mb-2">
      <i className="material-icons mr-1">edit</i> Изменить
    </Button>;
    if (this.state.isEditing) {
      return (
        <CoursesForm
          cours={this.state.cours}
          onSave={this.saveCours}
          onChange={this.updateCoursState}
          onToggle={this.toggleEdit}
          onDelete={this.deleteCours}
        />
      )
    }
    return (
      <Card small className="mb-4 pt-3">
        <CardHeader className="border-bottom text-center">
          <h4 className="mb-0">{this.state.cours.name}</h4>
          {this.props.auth.user.is_superuser ? changeButton : ''}
        </CardHeader>
        <ListGroup flush>
          <ListGroupItem className="p-4">
            <strong className="text-muted d-block mb-2">
              Описание
            </strong>
            <span>{this.state.cours.description}</span>
          </ListGroupItem>
        </ListGroup>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  var coursesEmployees = state.courses_employees.coursesEmployees ? state.courses_employees.coursesEmployees.filter(cours => cours.cours === state.courses.cours.id) : console.log('') ;
  return({
    cours: state.courses.cours,
    coursesEmployees: coursesEmployees,
    auth: state.auth
  })
};
export default connect(mapStateToProps, {deleteCours, getCours, getCoursesEmployees, updateCours})(withRouter(CoursDetails));