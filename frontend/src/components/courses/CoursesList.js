import React from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {Row, Col, Card, CardBody, Progress, CardFooter} from "shards-react";
import MaterialTable from "material-table";

import {getCourses, addCours, deleteCours} from "../../actions/courses";

class CoursesList extends React.Component {
  static propTypes = {
    /**
     * The small stats dataset.
     */
    courses: PropTypes.array.isRequired,
    getCourses: PropTypes.func.isRequired,
    addCours: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      courses: this.props.courses
    };
  };


  componentDidMount() {
    this.props.getCourses()
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

    const addCourse = <Row>
      <Col lg="3">
        <Card small className="card-post mb-3">
          <CardBody>
            <Link to={`/addcours`}>
              <h5 className="card-title">Добавить курс</h5>
            </Link>
          </CardBody>
        </Card>
      </Col>
    </Row>;

    return (
      <div>
        <Row>
          <Col>
            <MaterialTable
              columns={[
                { title: 'Курс', field: 'name', render: rowData => <Link to={`/cours/${rowData.id}`}>{rowData.name}</Link>},
              ]}
              data={this.state.courses}
              title="Список курсов"
              options={{
                exportButton: true
              }}
              localization={localization}
              editable={{
                onRowAdd: newData =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        this.props.addCours(newData, this.props.history);
                      }
                      resolve();
                    }, 1000);
                  }),
                onRowDelete: oldData =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        this.props.deleteCours(oldData.id);
                      }
                      resolve();
                    }, 1000);
                  })
              }}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  courses: state.courses.courses,
  auth: state.auth
});

export default connect(mapStateToProps, {getCourses, addCours, deleteCours})(CoursesList);