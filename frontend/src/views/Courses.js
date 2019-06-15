/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import CoursesList from "../components/courses/CoursesList";

class Courses extends React.Component {

  render() {
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Список курсов" subtitle="Курсы" className="text-sm-left" />
        </Row>
        <CoursesList />
      </Container>
    );
  }
}

export default Courses;
