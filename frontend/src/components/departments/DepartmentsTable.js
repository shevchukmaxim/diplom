import React from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import MaterialTable from "material-table";

import { Row, Col } from "shards-react";

import {getDepartments, deleteDepartment, addDepartment, updateDepartment} from "../../actions/departments";
import {getEmployees} from "../../actions/employees";

class DepartmentsTable extends React.Component {
  static propTypes = {
    departments: PropTypes.array.isRequired,
    getDepartments: PropTypes.func.isRequired,
    deleteDepartment: PropTypes.func.isRequired,
    updateDepartment: PropTypes.func.isRequired,
    addDepartment: PropTypes.func.isRequired,
    employees: PropTypes.array.isRequired,
    getEmployees: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.props.getDepartments();
    this.props.getEmployees();
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

    if (this.props.auth.user.is_superuser)
      return (
        <Row>
          <Col>
            <MaterialTable
              columns={[
              { title: 'Название', field: 'dept_name' }
                ]}
              data={this.props.departments}
              title="Отделы"
              options={{
                exportButton: true
              }}
              localization={localization}
              editable={{
                onRowAdd: newData =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        this.props.addDepartment(newData);
                      }
                      resolve();
                    }, 1000);
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        this.props.updateDepartment(oldData.dept_no, newData);
                      }
                      resolve();
                    }, 1000);
                  }),
                onRowDelete: oldData =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        this.props.deleteDepartment(oldData.dept_no);
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
              { title: 'Название', field: 'dept_name' }
            ]}
            data={this.props.departments}
            title="Отделы"
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

const mapStateToProps = state => ({
  departments: state.departments.departments,
  employees: state.employees.employees,
  auth: state.auth
});

export default connect(mapStateToProps, {getEmployees, addDepartment, getDepartments, deleteDepartment, updateDepartment})(DepartmentsTable);