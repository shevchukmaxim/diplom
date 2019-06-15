import React from "react";

import { Container, Row } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import DepartmentsTable from "../components/departments/DepartmentsTable";

const Departments = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Отделы" subtitle="Список всех отделов" className="text-sm-left" />
    </Row>
    <DepartmentsTable/>
  </Container>

);

export default (Departments);
