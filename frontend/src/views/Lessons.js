/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import LessonsList from "../components/lessons/LessonsList";

class Lessons extends React.Component {

  render() {
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Список занятий" subtitle="Занятия" className="text-sm-left" />
        </Row>
        <LessonsList />
      </Container>
    );
  }
}

export default Lessons;
