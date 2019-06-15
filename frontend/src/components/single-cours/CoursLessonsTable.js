import React from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MaterialTable from "material-table";
import {ProgressBar} from "../common/ProgressBar";

import {getCourses} from "../../actions/courses";
import {getCoursesEmployees} from "../../actions/courses_employees";


import { Row, Col } from "shards-react";
import {getCoursesLessons} from "../../actions/courses_lessons";

class CoursLessonsTable extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      coursesLessons: this.props.coursesLessons,
      employees: this.props.employees,
      cours: this.props.cours
    };
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.coursesLessons != nextProps.coursesLessons){
      this.setState({coursesLessons: nextProps.coursesLessons})
    }
    if (this.props.cours != nextProps.cours){
      this.setState({cours: nextProps.cours})
    }
  };


  render() {

    const participationTrue = <i className="material-icons">done</i>;
    const participationFalse = <i className="material-icons">clear</i>;

    let optionsEmployees = {};
    this.props.employees.map(employee => {
      optionsEmployees[employee.emp_no] = employee.full_name;
    });

    const localization = {
      pagination: {
        labelDisplayedRows: '{from}-{to} из {count}',
        labelRowsSelect: 'строк'
      },
      header: {
        actions: 'Действия'
      },
      body: {
        emptyDataSourceMessage: 'Нет записей для отображения',
        filterRow: {
          filterTooltip: 'Фильтр'
        },
        addTooltip: 'Добавить',
        deleteTooltip: 'Удалить',
        editTooltip: 'Изменить',
        editRow: {
          deleteText: 'Вы уверены, что хотите удалить эту запись?',
          cancelTooltip: 'Отменить',
          saveTooltip: 'Подтвердить'
        }
      },
      toolbar: {
        searchTooltip: 'Поиск',
        searchPlaceholder: 'Поиск',
        exportTitle: 'Экспорт',
        exportAriaLabel: 'Экспорт',
        exportName: 'CSV'
      },
      grouping: {
        placeholder: 'Перетащите заголовок колонки сюда, чтобы сгрупировать данные'
      }
    };
    return (
      <MaterialTable
        columns={[
          { title: 'Занятие', field: 'lesson', render: rowData => <Link to={`/lesson/${rowData.lesson}`}>{rowData.lesson_title}</Link>},
          { title: 'Дата', field: 'date', render: rowData => <span>{rowData.lesson_date && new Date(rowData.lesson_date).toLocaleDateString('ru-Rus')}</span> },
        ]}
        data={this.state.coursesLessons}
        title="Список занятий"
        options={{
          exportButton: true
        }}
        localization={localization}
      />
    );
  }
}

const mapStateToProps = state => {
  var coursesLessons = state.courses_lessons.coursesLessons ? state.courses_lessons.coursesLessons.filter(cours => cours.cours === state.courses.cours.id) : console.log('') ;
  return({
  employees: state.employees.employees,
  coursesLessons: coursesLessons,
  cours: state.courses.cours,
  auth: state.auth
  })
};

export default connect(mapStateToProps, {getCourses, getCoursesLessons})(CoursLessonsTable);