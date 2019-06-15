import React from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {Row, Col, Card, CardBody, Progress, CardFooter} from "shards-react";
import MaterialTable from "material-table";

import {getGroups} from "../../actions/groups";

class GroupsTable extends React.Component {
  static propTypes = {
    /**
     * The small stats dataset.
     */
    groups: PropTypes.array.isRequired,
    getGroups: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getGroups()
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

    const addLesson = <Row>
      <Col lg="3">
        <Card small className="card-post mb-3">
          <CardBody>
            <Link to={`/addlesson`}>
              <h5 className="card-title">Добавить группу</h5>
            </Link>
          </CardBody>
        </Card>
      </Col>
    </Row>;

    return (
      <div>
        {this.props.auth.user.is_superuser ? addLesson : ''}
        <Row>
          <Col>
            <MaterialTable
              columns={[
                { title: 'Группа', field: 'name', render: rowData => <Link to={`/group/${rowData.id}`}>{rowData.name}</Link>},
              ]}
              data={this.props.groups}
              title="Список групп"
              options={{
                exportButton: true
              }}
              localization={localization}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  groups: state.group.groups,
  auth: state.auth
});

export default connect(mapStateToProps, {getGroups})(GroupsTable);