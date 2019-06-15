import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import SmallStats from "./../components/common/SmallStats";
import UsersOverview from "./../components/dashboard/UsersOverview";
import NewDraft from "./../components/dashboard/NewDraft";
import Discussions from "./../components/dashboard/Discussions";
import TopReferrals from "./../components/common/TopReferrals";
import EmployeesCounter from "../components/employees/EmployeesCounter";
import DepartmentsCounter from "../components/departments/DepartmentsCounter";
import LessonsCounter from "../components/lessons/LessonsCounter";
import UsersCounter from "../components/users/UsersCounter";
import GroupsCounter from "../components/groups/GroupsCounter";
import CoursesCounter from "../components/courses/CoursesCounter";

const MainDashboard = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="Общая статистика" subtitle="Главная" className="text-sm-left mb-3" />
    </Row>

    {/* Counter */}
    <Row>
      <Col className="col-lg mb-2 col-sm-6">
        <EmployeesCounter/>
      </Col>
      <Col className="col-lg mb-2 col-sm-6">
        <DepartmentsCounter/>
      </Col>
      <Col className="col-lg mb-2 col-sm-6">
        <LessonsCounter/>
      </Col>
      <Col className="col-lg mb-2 col-sm-6">
        <CoursesCounter/>
      </Col>
      <Col className="col-lg mb-2 col-sm-6">
        <GroupsCounter/>
      </Col>
    </Row>

    <Row>
      {/* Users Overview */}
      <Col lg="12" md="12" sm="12" className="mb-4">
        <UsersOverview />
      </Col>

      {/*/!* New Draft *!/*/}
      {/*<Col lg="4" md="6" sm="12" className="mb-4">*/}
      {/*  <NewDraft />*/}
      {/*</Col>*/}

      {/*/!* Discussions *!/*/}
      {/*<Col lg="5" md="12" sm="12" className="mb-4">*/}
      {/*  <Discussions />*/}
      {/*</Col>*/}

      {/*/!* Top Referrals *!/*/}
      {/*<Col lg="3" md="12" sm="12" className="mb-4">*/}
      {/*  <TopReferrals />*/}
      {/*</Col>*/}
    </Row>
  </Container>
);

MainDashboard.propTypes = {
  /**
   * The small stats dataset.
   */
  smallStats: PropTypes.array
};


export default MainDashboard;
