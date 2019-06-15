import React from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MaterialTable from "material-table";

import { Row, Col } from "shards-react";

import {getLessonsEmployees, deleteLessonEmployee, addLessonEmployee, updateLessonEmployee} from "../../actions/lessons_employees";
import {getEmployees} from "../../actions/employees";

class LessonTable extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      lessonsEmployees: this.props.lessonsEmployees,
      employees: this.props.employees,
      lesson: this.props.lesson
    };
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.lessonsEmployees != nextProps.lessonsEmployees){
      this.setState({lessonsEmployees: nextProps.lessonsEmployees})
    }
    if (this.props.lesson != nextProps.lesson){
      this.setState({lesson: nextProps.lesson})
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

    if (this.props.auth.user.is_superuser)
      return (
        <Row>
          <Col>
            <MaterialTable
              columns={[
                { title: 'Сотрудник', field: 'employee', editable: 'onAdd', lookup: optionsEmployees, render: rowData => <Link to={`/employee/${rowData.employee}`}>{rowData.employee_name}</Link>},
                { title: 'Посещение', field: 'participation', lookup: { true: participationTrue, false: participationFalse }, render: rowData => rowData.participation ? participationTrue : participationFalse },
                { title: 'Оценка', field: 'score', lookup: { '': '',2: 2, 3: 3, 4: 4, 5: 5 } },
              ]}
              data={this.state.lessonsEmployees}
              title="Сотрудники на занятии"
              options={{
                exportButton: true
              }}
              localization={localization}
              editable={{
                onRowAdd: newData =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        newData['lesson'] = this.state.lesson.id;
                        this.props.addLessonEmployee(newData);
                      }
                      resolve();
                    }, 1000);
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        this.props.updateLessonEmployee(oldData.id, newData);
                      }
                      resolve();
                    }, 1000);
                  }),
                onRowDelete: oldData =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        this.props.deleteLessonEmployee(oldData.id);
                      }
                      resolve();
                    }, 1000);
                  })
              }}
            />
          </Col>
        </Row>
      );
    return (
      <Row>
        <Col>
          <MaterialTable
            columns={[
              { title: 'Сотрудник', field: 'employee', editable: 'onAdd', lookup: optionsEmployees, render: rowData => <Link to={`/employee/${rowData.employee}`}>{rowData.employee_name}</Link>},
              { title: 'Посещение', field: 'participation', lookup: { true: participationTrue, false: participationFalse }, render: rowData => rowData.participation ? participationTrue : participationFalse },
              { title: 'Оценка', field: 'score', lookup: { '': '',2: 2, 3: 3, 4: 4, 5: 5 } },
            ]}
            data={this.state.lessonsEmployees}
            title="Сотрудники на занятии"
            options={{
              exportButton: true
            }}
            localization={localization}
          />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  var lessonsEmployees = state.lessons_employees.lessonsEmployees ? state.lessons_employees.lessonsEmployees.filter(lesson => lesson.lesson === state.lessons.lesson.id) : console.log('') ;
  return({
  employees: state.employees.employees,
  lessonsEmployees: lessonsEmployees,
  lesson: state.lessons.lesson,
  auth: state.auth
  })
};

export default connect(mapStateToProps, {getEmployees, getLessonsEmployees, addLessonEmployee, deleteLessonEmployee, updateLessonEmployee})(LessonTable);