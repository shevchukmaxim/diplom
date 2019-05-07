import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import ClassDetails from "../components/single-class/ClassDetails";
import ClassDiagramm from "../components/single-class/ClassDiagramm";
import ClassStudents from "../components/single-class/ClassStudents";

const SingleClass = () => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Занятие" subtitle="Обзор" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row>
      <Col lg="8" md="12">
        <ClassDetails />
      </Col>
      <Col lg="4" md="12">
        <ClassDiagramm />
      </Col>
    </Row>
    <Row className="mt-3">
      <Col md="12">
        <ClassStudents />
      </Col>
    </Row>

  </Container>
);

export default SingleClass;
