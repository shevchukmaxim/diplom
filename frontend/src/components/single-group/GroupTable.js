import React from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MaterialTable from "material-table";

import { Row, Col } from "shards-react";

import {getLessonsEmployees, deleteLessonEmployee, addLessonEmployee, updateLessonEmployee} from "../../actions/lessons_employees";
import {getEmployees} from "../../actions/employees";
import {getGroupsEmployees, addGroupEmployee, deleteGroupEmployee, updateGroupEmployee} from "../../actions/groups_employees";

class GroupTable extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      groupsEmployees: this.props.groupsEmployees,
      employees: this.props.employees
    };
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.groupsEmployees != nextProps.groupsEmployees){
      this.setState({groupsEmployees: nextProps.groupsEmployees})
    }
  };


  render() {

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
              ]}
              data={this.state.groupsEmployees}
              title="Сотрудники"
              options={{
                exportButton: true
              }}
              localization={localization}
              editable={{
                onRowAdd: newData =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        this.props.addGroupEmployee(newData);
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
                        this.props.updateGroupEmployee(oldData.id);
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
              { title: 'Оценка', field: 'score', lookup: { '-': '-',2: 2, 3: 3, 4: 4, 5: 5 } },
            ]}
            data={this.state.groupsEmployees}
            title="Состав группы"
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
  var groupsEmployees = state.group_employee.groupsEmployees ? state.group_employee.groupsEmployees.filter(group => group.group === state.group.group.id) : console.log('') ;
  return({
    employees: state.employees.employees,
    groupsEmployees: groupsEmployees,
    lesson: state.lessons.lesson,
    auth: state.auth
  })
};

export default connect(mapStateToProps, {getEmployees, getGroupsEmployees, addGroupEmployee, deleteGroupEmployee, updateGroupEmployee})(GroupTable);