import React, {Component} from "react";
import PropTypes from "prop-types";
import Select from 'react-select';
import {connect} from 'react-redux';
import {addEmployee, deleteEmployee, updateEmployee} from "../../actions/employees";
import {getDepartments} from "../../actions/departments";
import {
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  FormSelect,
  InputGroup,
  InputGroupAddon,
  InputGroupText, Button, Card, CardHeader, CardBody
} from "shards-react";

const optionsGender = [
  { value: 'М', label: 'М' },
  { value: 'Ж', label: 'Ж' }
];

export class EmployeesForm extends Component {

  state = {
    first_name: "Имя",
    middle_name: "",
    last_name: "",
    birth_date: "",
    gender: "",
    hire_date: "",
    department: "",
    selectedGender: "",
    selectedDepartment: ""
  };

  static propTypes = {
    addEmployee: PropTypes.func.isRequired,
    departments: PropTypes.array.isRequired,
    getDepartments: PropTypes.func.isRequired,
    employee: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);

    console.log(props);

    let employee = [];
    if (props.employee){
      employee = props.employee;
      this.setState({
        first_name: "Имя",
        middle_name: employee.middle_name,
        last_name: employee.last_name,
        birth_date: employee.birth_date,
        gender: employee.gender,
        hire_date: employee.hire_date,
        department: employee.department,
        selectedGender: "",
        selectedDepartment: ""
      });
    }
  };

  componentDidMount() {
    this.props.getDepartments();
  };

  handleChange = (selectedGender) => {
    this.setState({ selectedGender });
  };

  handleChange2 = (selectedDepartment) => {
    this.setState({ selectedDepartment });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { first_name, middle_name, last_name, birth_date, hire_date } = this.state;
    const gender = this.state.selectedGender.value;
    const department = this.state.selectedDepartment.value;
    const employee = { first_name, middle_name, last_name, birth_date, gender, hire_date, department };
    if (this.props.updateEmployee(employee)){
    this.setState({
      first_name: "",
      middle_name: "",
      last_name: "",
      birth_date: "",
      gender: "",
      hire_date: "",
      department: "",
      selectedGender: "",
      selectedDepartment: ""
    })}
  };


  render() {

    let employee = [];
    if (this.props.employee)
      employee = this.props.employee;

    var optionsDepartment = [];
    this.props.departments.map(department => {
      optionsDepartment.push({
        value: department.dept_no,
        label:   department.dept_name
      });
    });

    const { first_name, middle_name, last_name, birth_date, gender, hire_date, department, selectedGender, selectedDepartment } = this.state;
    return(
      <Card small className="mb-4">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Добавить сотрудника</h6>
        </CardHeader>
        <CardBody className="p-0 pb-3">
          <Col sm="12" md="12">
            <Form onSubmit={this.onSubmit}>
              <Row form>
                <Col md="4" className="form-group">
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
                </Col>
                <Col md="4" className="form-group">
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
                </Col>
                <Col md="4" className="form-group">
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
                </Col>
              </Row>
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
                <Select
                  name="gender"
                  value={selectedGender}
                  onChange={this.handleChange}
                  options={optionsGender}
                  placeholder="Выберите пол..."
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
                <label htmlFor="department">Отдел</label>
                <Select
                  name="department"
                  value={selectedDepartment}
                  onChange={this.handleChange2}
                  options={optionsDepartment}
                  placeholder="Выберите отдел..."
                />
              </FormGroup>
              <FormGroup>
                <Button type="submit">Добавить</Button>
              </FormGroup>
            </Form>
          </Col>
        </CardBody>
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  departments: state.departments.departments
});

export default connect(mapStateToProps, {getDepartments, addEmployee, updateEmployee})(EmployeesForm);
