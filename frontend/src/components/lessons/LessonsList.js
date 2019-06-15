import React from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {Row, Col, Card, CardBody, Progress, CardFooter} from "shards-react";
import MaterialTable from "material-table";

import {getLessons, deleteLesson} from "../../actions/lessons";

class LessonsList extends React.Component {
  static propTypes = {
    /**
     * The small stats dataset.
     */
    lessons: PropTypes.array.isRequired,
    getLessons: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getLessons()
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
              <h5 className="card-title">Добавить занятие</h5>
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
                { title: 'Занятие', field: 'title', render: rowData => <Link to={`/lesson/${rowData.id}`}>{rowData.title}</Link>},
                { title: 'Дата', field: 'date', render: rowData => <span>{rowData.date && new Date(rowData.date).toLocaleDateString('ru-Rus')}</span>}
              ]}
              data={this.props.lessons}
              title="Список занятий"
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
  lessons: state.lessons.lessons,
  auth: state.auth
});

export default connect(mapStateToProps, {getLessons})(LessonsList);