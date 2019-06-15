import React from "react";

import { Container, Row } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import {getEmployees, deleteEmployee, addEmployee, updateEmployee} from "../actions/employees";
import {getUsers} from "../actions/users";
import {connect} from "react-redux";
import UsersTable from "../components/users/UsersTable";

class Users extends React.Component {

  componentDidMount() {
    this.props.getUsers();
    this.props.getEmployees();
  };

  render() {
    console.log(this.props);
    return (

      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Сотрудники" subtitle="Список всех сотрудников" className="text-sm-left" />
        </Row>
        <UsersTable employees = {this.props.employees} users = {this.props.users} />
      </Container>
    );
  }
}

const mapStateToProps = state =>{
  return({
  users: state.users.users,
  employees: state.employees.employees
});
};

export default connect(mapStateToProps, {getUsers, getEmployees})(Users);
