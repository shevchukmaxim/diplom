import React from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MaterialTable from "material-table";

import { Row, Col, Card, CardHeader, CardBody } from "shards-react";

import {getEmployees, deleteEmployee, addEmployee, updateEmployee} from "../../actions/employees";
import {getDepartments} from "../../actions/departments";

class EmployeesTable extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      departments: this.props.departments,
      employees: this.props.employees
    };
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.employees != nextProps.employees){
      this.setState({employees: nextProps.employees})
    }
  };

  render() {
    let optionsDepartment = {};
    this.props.departments.map(department => {
      optionsDepartment[department.dept_no] = department.dept_name;
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
            { title: 'Фамилия', field: 'last_name', render: rowData => <Link to={`/employee/${rowData.emp_no}`}>{rowData.last_name}</Link>},
            { title: 'Имя', field: 'first_name' },
            { title: 'Отчество', field: 'middle_name' },
            { title: 'Отдел', field: 'department', lookup: optionsDepartment },
            { title: 'Пол', field: 'gender', lookup: { 'М': 'М', 'Ж': 'Ж' } }
          ]}
          data={this.state.employees}
          title="Сотрудники"
          options={{
            grouping: true,
            exportButton: true
          }}
          localization={localization}
          editable={{
            onRowAdd: newData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  {
                    this.props.addEmployee(newData);
                  }
                  resolve();
                }, 1000);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  {
                    this.props.updateEmployee(oldData.emp_no, newData);
                  }
                  resolve();
                }, 1000);
              }),
            onRowDelete: oldData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  {
                    this.props.deleteEmployee(oldData.emp_no);
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
              { title: 'Фамилия', field: 'last_name', render: rowData => <Link to={`/employee/${rowData.emp_no}`}>{rowData.last_name}</Link>},
              { title: 'Имя', field: 'first_name' },
              { title: 'Отчество', field: 'middle_name' },
              { title: 'Отдел', field: 'department', lookup: optionsDepartment },
              { title: 'Пол', field: 'gender', lookup: { 'М': 'М', 'Ж': 'Ж' } }
            ]}
            data={this.state.employees}
            title="Сотрудники"
            options={{
              grouping: true,
              exportButton: true
            }}
            localization={localization}
          />
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => ({
  employees: state.employees.employees,
  departments: state.departments.departments,
  auth: state.auth
});

export default connect(mapStateToProps, {addEmployee, getEmployees, deleteEmployee, updateEmployee, getDepartments})(EmployeesTable);