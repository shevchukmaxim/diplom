import React from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MaterialTable from "material-table";
import {ProgressBar} from "../common/ProgressBar";
import moment from 'moment';

import {getCourses} from "../../actions/courses";
import {getCoursesEmployees} from "../../actions/courses_employees";


import { Row, Col } from "shards-react";

class CoursTable extends React.Component {

  constructor(props, context) {
    super(props, context);
  };

  render() {
    let data = this.props.coursesEmployees;
    const lessonsEmps = this.props.lessonsEmps;
    const lessonsCount = this.props.lessonsCount;
    const coursesLessons = this.props.coursesLessons;
    const colors = ["text-danger", "text-warning", "text-success"];

    const participationTrue = <i className="material-icons">done</i>;
    const participationFalse = <i className="material-icons">clear</i>;

    let participation = 0;
    let lessonsCounter = 0;
    let expectedProgress = 0;
    let misses = 0;
    let average = 0;
    let scores = [];
    let sumScores = 0;
    var now = moment();

    coursesLessons.map(lesson => {
      if(lesson.lesson_date != null && now.isAfter(moment(lesson.lesson_date, 'YYYY-MM-DD'))) {
        lessonsCounter++;
      }
    });

    expectedProgress =  Math.round((lessonsCounter / lessonsCount) * 100);

    data.map (emp => {
      let lessons = lessonsEmps.filter(lesson => lesson.employee === emp.employee);
      participation = lessons.filter(lesson => lesson.participation === true).length;
      participation = Math.round((participation / lessonsCount) * 100);
      lessons.map(lesson => lesson.score ? scores.push(parseInt(lesson.score)) : console.log(''));
      sumScores = scores.reduce((partial_sum, a) => partial_sum + a,0);
      average = sumScores / scores.length ? sumScores / scores.length : 0;
      average = Math.round(average * 10) / 10;
      emp['participationColor'] = participation <= 30 ? colors[0] : (participation <= 50 ? colors[1] : colors[2]);
      emp['averageColor'] = average <= 3 ? colors[0] : (average <= 4 ? colors[1] : colors[2]);
      emp['average'] = average;
      emp['participation'] = participation;
      scores = [];
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
          { title: 'Сотрудник', field: 'employee', editable: 'onAdd', render: rowData => <Link to={`/employee/${rowData.employee}`}>{rowData.employee_name}</Link>},
          { title: 'Прогресс', field: 'participation', render: rowData => <strong className={rowData.participationColor}>{rowData.participation} / {expectedProgress}%</strong> },
          { title: 'Средний балл', field: 'average', render: rowData => <strong className={rowData.averageColor}>{rowData.average}</strong> },
        ]}
        data={data}
        title="Рейтинг сотрудников"
        options={{
          exportButton: true
        }}
        localization={localization}
      />
    );
  }
}


export default (CoursTable);