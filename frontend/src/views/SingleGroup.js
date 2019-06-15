import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import LessonDetails from "../components/single-lesson/LessonDetails";
import LessonDiagramm from "../components/single-lesson/LessonDiagramm";
import LessonTable from "../components/single-lesson/LessonTable";
import {connect} from "react-redux";
import {getEmployees} from "../actions/employees";
import {getGroup} from "../actions/groups";
import {getGroupsEmployees} from "../actions/groups_employees";
import PropTypes from "prop-types";
import GroupTable from "../components/single-group/GroupTable";

class SingleGroup extends React.Component {

  static propTypes = {
    groups: PropTypes.array.isRequired,
    groupsEmployees: PropTypes.array.isRequired,
    getGroup: PropTypes.func.isRequired,
    getGroupsEmployees: PropTypes.func.isRequired,
    getEmployees: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getEmployees();
    this.props.getGroupsEmployees();
    this.props.getGroup(parseInt(this.props.match.params.id));
  };

  render() {
    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle title="Группа" subtitle="Обзор" md="12" className="ml-sm-auto mr-sm-auto" />
        </Row>
        <Row className="mt-0">
          <Col md="12">
            <GroupTable groupsEmployees = {this.props.groupsEmployees} employees = {this.props.employees}/>
          </Col>
        </Row>

      </Container>
    );
  }
}

const mapStateToProps = state => ({
  groupsEmployees: state.group_employee.groupsEmployees,
  employees: state.employees.employees,
  groups: state.group.groups,
  group: state.group.group,
  auth: state.auth
});

export default connect(mapStateToProps, {getGroupsEmployees, getGroup, getEmployees})(SingleGroup);
