import React, {Component} from "react";
import PropTypes from "prop-types";
import Select from 'react-select';
import {connect} from 'react-redux';
import {addLesson, getLesson} from "../../actions/lessons";

import {
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  FormSelect,
  InputGroup,
  InputGroupAddon,
  InputGroupText, Button, Card, CardHeader, CardBody,
  FormTextarea
} from "shards-react";

export class CoursesForm extends Component {

  render() {
    return(
      <Row>
        <Col sm="12" md="8">
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Изменить занятие</h6>
            </CardHeader>
            <CardBody className="p-0 pb-3">
              <Col sm="12" md="12">
                <Form onSubmit={this.props.onSave}>
                  <Row form>
                    <Col md="12" className="form-group">
                      <FormGroup>
                        <label htmlFor="last_name">Заголовок</label>
                        <FormInput
                          type="text"
                          placeholder="Название курса"
                          name="name"
                          onChange={this.props.onChange}
                          value={this.props.cours.name}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="12" className="form-group">
                      <FormGroup>
                        <label htmlFor="date">Дата проведения</label>
                        <FormInput
                          type="date"
                          name="date"
                          onChange={this.props.onChange}
                          value={this.props.cours.date}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <label htmlFor="description">Описание</label>
                    <FormTextarea value={this.props.cours.description} onChange={this.props.onChange} />
                  </FormGroup>
                  <FormGroup>
                    <Button onClick={this.props.onDelete} pill outline theme="danger" size="sm" className="mb-2">Удалить</Button>
                    <Button onClick={this.props.onToggle} pill outline size="sm" className="mb-2">Отменить</Button>
                    <Button type="submit" pill outline theme="success" size="sm" className="mb-2">Применить</Button>
                  </FormGroup>
                </Form>
              </Col>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default (CoursesForm);
