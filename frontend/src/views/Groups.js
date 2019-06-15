/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import GroupsTable from "../components/groups/GroupsTable";

class Groups extends React.Component {

  render() {
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Список групп" subtitle="Учебные группы" className="text-sm-left" />
        </Row>
        <GroupsTable />
      </Container>
    );
  }
}

export default Groups;
