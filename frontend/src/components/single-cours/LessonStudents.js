import React from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Row, Col, Card, CardHeader, CardBody } from "shards-react";

import {getLessonsEmployees, deleteLessonEmployee} from "../../actions/lessons_employees";

class LessonStudents extends React.Component {
  static propTypes = {
    /**
     * The small stats dataset.
     */
    getLessonsEmployees: PropTypes.func.isRequired,
    deleteLessonEmployee: PropTypes.func.isRequired,
    lesson_id: PropTypes.string.isRequired,
    lessonsEmployees: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getLessonsEmployees()
  };

  render() {
    const participationTrue = <i className="material-icons">done</i>;
    const participationFalse = <i className="material-icons">clear</i>;
    return (
      <Row>
        <Col>
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Таблица сотрудников</h6>
            </CardHeader>
            <CardBody className="p-0 pb-3">
              <table className="table mb-0">
                <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Сотрудник
                  </th>
                  <th scope="col" className="border-0">
                    Посещение
                  </th>
                  <th scope="col" className="border-0">
                    Оценка
                  </th>
                  <th>
                  </th>
                </tr>
                </thead>
                <tbody>
                {this.props.lessonsEmployees.map((lesson, index) => {
                  let participation = participationFalse;
                  if (lesson.participation){
                    participation = participationTrue;
                  };
                  if (lesson.lesson === parseInt(this.props.lesson_id))
                  return (
                  <tr key={lesson.id}>
                    <td>{index+1}</td>
                    <td>
                      <Link to={`/employee/${lesson.employee}`}>
                        {lesson.employee_name}
                      </Link>
                    </td>
                    <td>{lesson.score}</td>
                    <td>
                      <button
                        onClick={this.props.deleteLessonEmployee.bind(this, lesson.id)}
                        className="btn btn-danger btn-sm"
                      >
                        {" "}
                        Удалить
                      </button>
                    </td>
                  </tr>
                )})}
                </tbody>
              </table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  lessonsEmployees: state.lessons_employees.lessonsEmployees
});

export default connect(mapStateToProps, {getLessonsEmployees, deleteLessonEmployee})(LessonStudents);