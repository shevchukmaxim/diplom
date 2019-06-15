/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
} from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import AddLessonForm from "../../components/lessons/AddLessonForm";

class AddLesson extends React.Component {

  render() {
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="8" title="Занятие" subtitle="Занятия" className="text-sm-left" />
        </Row>
        <AddLessonForm />
      </Container>
    );
  }
}

export default AddLesson;
