import React from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MaterialTable from "material-table";

import { Row, Col, Card, CardHeader, CardBody } from "shards-react";

import {getEmployees, deleteEmployee, addEmployee, updateEmployee} from "../../actions/employees";
import {getUsers} from "../../actions/users";

class UsersTable extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      users: this.props.users,
      employees: this.props.employees
    };
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.employees != nextProps.employees){
      this.setState({employees: nextProps.employees})
    }
    if (this.props.users != nextProps.users){
      this.setState({users: nextProps.users})
    }
  };

  render() {
    let optionsUser = {};

    this.props.users.users.map(user => {
      optionsUser[user.id] = user.username;
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
      <Row>
        <Col>
          <MaterialTable
            columns={[
              { title: 'Сотрудник', field: 'last_name', render: rowData => <Link to={`/employee/${rowData.emp_no}`}>{rowData.full_name}</Link>},
              { title: 'Пользователь', field: 'user', lookup: optionsUser, render: rowData => rowData.username },
            ]}
            data={this.state.employees}
            title="Привязать пользователя к сотруднику"
            options={{
              exportButton: true
            }}
            localization={localization}
            editable={{
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      this.props.updateEmployee(oldData.emp_no, newData);
                    }
                    resolve();
                  }, 1000);
                })
            }}
          />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  employees: state.employees.employees,
  users: state.users,
  auth: state.auth
});

export default connect(mapStateToProps, {addEmployee, getEmployees, deleteEmployee, updateEmployee, getUsers})(UsersTable);