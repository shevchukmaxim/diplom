import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import LessonDetails from "../components/single-lesson/LessonDetails";
import LessonDiagramm from "../components/single-lesson/LessonDiagramm";
import LessonStudents from "../components/single-lesson/LessonStudents";

const SingleDepartment = () => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Отдел" subtitle="Обзор" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row>
      <Col lg="8" md="12">
        <LessonDetails />
      </Col>
      <Col lg="4" md="12">
        <LessonDiagramm />
      </Col>
    </Row>
    <Row className="mt-3">
      <Col md="12">
        <LessonStudents />
      </Col>
    </Row>

  </Container>
);

export default SingleDepartment;
