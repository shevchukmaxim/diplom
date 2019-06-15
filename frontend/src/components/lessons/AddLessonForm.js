import React, {Component} from "react";
import PropTypes from "prop-types";
import Select from 'react-select';
import {connect} from 'react-redux';
import {addLesson} from "../../actions/lessons";
import { Link, Redirect, withRouter} from "react-router-dom";
import {
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  FormSelect,
  InputGroup,
  InputGroupAddon,
  InputGroupText, Button, Card, CardHeader, CardBody, FormTextarea
} from "shards-react";

import {getLessons} from "../../actions/lessons";
import {getLessonsEmployees} from "../../actions/lessons_employees";
import {getCourses} from "../../actions/courses";
import {addCoursLesson} from "../../actions/courses_lessons";

export class AddLessonForm extends Component {

  state = {
    title: "",
    theme: "",
    date: "",
    description: "",
    selectedCours: ""
  };

  static propTypes = {
    addLesson: PropTypes.func.isRequired,
    getCourses: PropTypes.func.isRequired
  };

  onChange = e => {
    const field = e.target.name ? e.target.name : 'description';
    this.setState({[field]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { title, theme, date, description } = this.state;
    const cours = this.state.selectedCours.value;
    const lesson = { title, theme, date, description, cours };
    const lessonId = this.props.lessons[this.props.lessons.length - 1].id + 1;
    const coursLesson = {cours : cours, lesson : lessonId};
    console.log(coursLesson);
    if (this.props.addLesson(lesson, this.props.history)) {
      this.setState({
        title: "",
        theme: "",
        date: "",
        description: "",
        selectedCours: ""
      });
    };
    if (this.props.addCoursLesson(coursLesson, this.props.history))
      console.log('suc');
  };

  handleChange = (selectedCours) => {
    this.setState({ selectedCours });
  };

  componentDidMount() {
    this.props.getCourses();
    this.props.getLessons();
  };


  render() {

    let lesson = [];
    if (this.props.lesson)
      lesson = this.props.lesson;

    console.log();

    var optionsCourses = [];
    this.props.courses.map(cours => {
      optionsCourses.push({
        value: cours.id,
        label: cours.name
      });
    });

    const { title, theme, date, description, selectedCours } = this.state;
    return(
      <Row>
        <Col sm="12" md="8">
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Добавить занятие</h6>
            </CardHeader>
            <CardBody className="p-0 pb-3">
              <Col sm="12" md="12">
                <Form onSubmit={this.onSubmit}>
                  <Row form>
                    <Col md="12" className="form-group">
                      <FormGroup>
                        <label htmlFor="last_name">Заголовок</label>
                        <FormInput
                          type="text"
                          placeholder="Заголовок занятия"
                          name="title"
                          onChange={this.onChange}
                          value={title}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="12" className="form-group">
                      <FormGroup>
                        <label htmlFor="first_name">Тема</label>
                        <FormInput
                          type="text"
                          placeholder="Тема занятия"
                          name="theme"
                          onChange={this.onChange}
                          value={theme}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="12" className="form-group">
                      <FormGroup>
                        <label htmlFor="date">Дата проведения</label>
                        <FormInput
                          type="date"
                          name="date"
                          onChange={this.onChange}
                          value={date}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="12" className="form-group top-view">
                      <FormGroup>
                        <label htmlFor="cours">Курс</label>
                        <Select
                          name="cours"
                          value={selectedCours}
                          onChange={this.handleChange}
                          options={optionsCourses}
                          placeholder="Выберите курс"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <label htmlFor="description">Описание</label>
                    <FormTextarea value={description} onChange={this.onChange} />
                  </FormGroup>
                  <FormGroup>
                    <Button type="submit" pill outline theme="success" size="sm" className="mb-2">Применить</Button>
                  </FormGroup>
                </Form>
              </Col>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => ({
  courses: state.courses.courses,
  lesson: state.lessons.lesson,
  lessons: state.lessons.lessons
});

export default connect(mapStateToProps, { addLesson, getCourses, getLessons, addCoursLesson})(withRouter(AddLessonForm));
