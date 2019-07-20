/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
} from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import {AddCoursForm} from "./AddCoursForm";

class AddCours extends React.Component {

  render() {
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="8" title="Новый курс" subtitle="Курсы" className="text-sm-left" />
        </Row>
        <AddCoursForm />
      </Container>
    );
  }
}

export default AddCours;