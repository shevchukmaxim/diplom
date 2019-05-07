import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {addEmployee} from "../../actions/employees";
import {
  Row,
  Col,
  Form,
  FormInput,
  FormSelect,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText, Button, Card, CardHeader, CardBody
} from "shards-react";

export class EmployeesForm extends Component {
  state = {
    first_name: "",
    middle_name: "",
    last_name: "",
    birth_date: "",
    gender: "",
    hire_date: ""
  };

  static propTypes = {
    addEmployee: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { first_name, middle_name, last_name, birth_date, gender, hire_date } = this.state;
    const employee = { first_name, middle_name, last_name, birth_date, gender, hire_date };
    this.props.addEmployee(employee);
    this.setState({
      first_name: "",
      middle_name: "",
      last_name: "",
      birth_date: "",
      gender: "",
      hire_date: ""
    });
  };


  render() {
    const { first_name, middle_name, last_name, birth_date, gender, hire_date } = this.state;
    return(
      <Row>
        <Col md="6">
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Добавить сотрудника</h6>
            </CardHeader>
            <CardBody className="p-0 pb-3">
              <Col sm="12" md="6">
                <Form onSubmit={this.onSubmit}>
                  <FormGroup>
                    <label htmlFor="last_name">Фамилия</label>
                    <FormInput
                      type="text"
                      placeholder="Фамилия"
                      name="last_name"
                      onChange={this.onChange}
                      value={last_name}
                    />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="first_name">Имя</label>
                    <FormInput
                      type="text"
                      placeholder="Имя"
                      name="first_name"
                      onChange={this.onChange}
                      value={first_name}
                    />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="middle_name">Отчество</label>
                    <FormInput
                      type="text"
                      placeholder="Отчество"
                      name="middle_name"
                      onChange={this.onChange}
                      value={middle_name}
                    />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="birth_date">Дата рождения</label>
                    <FormInput
                      type="date"
                      name="birth_date"
                      onChange={this.onChange}
                      value={birth_date}
                    />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="gender">Пол</label>
                    <FormInput
                      type="text"
                      placeholder="Пол"
                      name="gender"
                      onChange={this.onChange}
                      value={gender}
                    />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="hire_date">Дата найма</label>
                    <FormInput
                      type="date"
                      name="hire_date"
                      onChange={this.onChange}
                      value={hire_date}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Button type="submit">Добавить</Button>
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

export default connect(
  null,
  { addEmployee }
)(EmployeesForm);
