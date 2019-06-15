import React from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MaterialTable from "material-table";

import { Row, Col, Card, CardHeader, CardBody } from "shards-react";

import {getEmployees, deleteEmployee, addEmployee, updateEmployee} from "../../actions/employees";

class EmployeesLessonsTable extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      lessons: this.props.lessons
    };
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.lessons != nextProps.lessons){
      this.setState({lessons: nextProps.lessons})
    }
  };

  render() {

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

    const participationTrue = <i className="material-icons">done</i>;
    const participationFalse = <i className="material-icons">clear</i>;

    return (
      <Row>
        <Col>
          <MaterialTable
            columns={[
              { title: 'Занятие', field: 'lesson', render: rowData => <Link to={`/lesson/${rowData.lesson}`}>{rowData.lesson_title}</Link>},
              { title: 'Дата', field: 'lesson_date' },
              { title: 'Посещение', field: 'participation', render: rowData => rowData.participation ? participationTrue : participationFalse },
              { title: 'Оценка', field: 'score' },
            ]}
            data={this.state.lessons}
            title="Занятия"
            options={{
              grouping: true,
              exportButton: true
            }}
            localization={localization}
          />
        </Col>
      </Row>
    );
  }
}

export default (EmployeesLessonsTable);