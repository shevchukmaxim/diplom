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

export class CoursesGroupForm extends Component {

  render() {
    let optionsGroup = [];

    this.props.groups.map(group => {
      optionsGroup.push({
        value: group.id,
        label: group.name
      });
    });
    return(
      <Card small className="mb-6">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Добавить/Удалить группу</h6>
        </CardHeader>
        <CardBody className="p-0 pb-3">
          <Col sm="12" md="12">
            <Form onSubmit={this.props.onSaveGroup}>
              <Row form>
                <Col md="12" className="form-group">
                  <FormGroup>
                    <label htmlFor="last_name">Группа</label>
                    <Select
                      name="group"
                      value={this.props.selectedGroup}
                      onChange={this.props.handleChange}
                      options={optionsGroup}
                      placeholder="Выберите группу"
                    />
                    {/*<FormInput*/}
                    {/*  type="text"*/}
                    {/*  placeholder="Группа"*/}
                    {/*  name="title"*/}
                    {/*  onChange={this.props.onChange}*/}
                    {/*  value={this.props.lesson.title}*/}
                    {/*/>*/}
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Button onClick={this.props.onDelete} pill outline theme="danger" size="sm" className="mb-2">Удалить</Button>
                <Button onClick={this.props.onToggle} pill outline size="sm" className="mb-2">Отменить</Button>
                <Button type="submit" pill outline theme="success" size="sm" className="mb-2">Применить</Button>
              </FormGroup>
            </Form>
          </Col>
        </CardBody>
      </Card>
    )
  }
}

export default (CoursesGroupForm);
