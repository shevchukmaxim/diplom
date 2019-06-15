import React, {Component} from "react";
import PropTypes from "prop-types";
import Select from 'react-select';

import {
  Row,
  Col,
  Form,
  FormGroup,
  Button, Card, CardHeader, CardBody,
} from "shards-react";

export class CoursesEmployeeForm extends Component {

  render() {
    let optionsEmployees = [];

    this.props.employees.map(employee => {
      optionsEmployees.push({
        value: employee.emp_no,
        label: employee.full_name
      });
    });
    return(
      <Card small className="mb-6">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Добавить/Удалить сотрудника</h6>
        </CardHeader>
        <CardBody className="p-0 pb-3">
          <Col sm="12" md="12">
            <Form onSubmit={this.props.onSaveEmployee}>
              <Row form>
                <Col md="12" className="form-group top-view">
                  <FormGroup>
                    <label htmlFor="last_name">Сотрудник</label>
                    <Select
                      name="employee"
                      value={this.props.selectedEmployee}
                      onChange={this.props.handleChangeEmployee}
                      options={optionsEmployees}
                      placeholder="Выберите сотрудника"
                    />
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

export default (CoursesEmployeeForm);
