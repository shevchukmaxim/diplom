/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

class Departments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      // list of posts.
      DepartmentsList: [
        {
          author: "John James",
          authorAvatar: require("../images/avatars/1.jpg"),
          title: "Администрация",
          body:
            "In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer wisdom work...",
          date: "29 February 2019"
        },
        {
          author: "John James",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "Отдел кадров",
          body:
            "It abode words began enjoy years no do ﻿no. Tried spoil as heart visit blush or. Boy possible blessing sensible set but margaret interest. Off tears...",
          date: "29 February 2019"
        },
        {
          author: "John James",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "Отдел продаж",
          body:
              "It abode words began enjoy years no do ﻿no. Tried spoil as heart visit blush or. Boy possible blessing sensible set but margaret interest. Off tears...",
          date: "29 February 2019"
        },
        {
          author: "John James",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "Отдел финансов",
          body:
              "It abode words began enjoy years no do ﻿no. Tried spoil as heart visit blush or. Boy possible blessing sensible set but margaret interest. Off tears...",
          date: "29 February 2019"
        },
        {
          author: "John James",
          authorAvatar: require("../images/avatars/3.jpg"),
          title:
            "Отдел маркетинга",
          body:
            "West room at sent if year. Numerous indulged distance old law you. Total state as merit court green decay he. Steepest merit checking railway...",
          date: "29 February 2019"
        }
      ]
    };
  }

  render() {
    const {
      DepartmentsList,
    } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Список отделов" subtitle="Отделы" className="text-sm-left" />
        </Row>


        {/* Third Row of Posts */}
        <Row>
          {DepartmentsList.map((post, idx) => (
            <Col lg="3">
              <a href="#" key={idx}>
                <Card small className="card-post mb-3">
                  <CardBody>
                    <h5 className="card-title">{post.title}</h5>
                  </CardBody>
                </Card>
              </a>
            </Col>
          ))}
        </Row>

      </Container>
    );
  }
}

export default Departments;
