import React from "react";

import { Container, Row } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import EmployeesTable from "../components/employees/EmployeesTable"
import EmployeesForm from "../components/employees/EmployeesForm"

const Employees = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Сотрудники" subtitle="Список всех сотрудников" className="text-sm-left" />
    </Row>
    <EmployeesForm></EmployeesForm>
    <EmployeesTable/>
  </Container>
);

export default (Employees);
