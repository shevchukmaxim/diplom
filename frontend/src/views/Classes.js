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
  Button,
  Progress
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import {Link} from "react-router-dom";

class Classes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      // list of posts.
      ClassesList: [
        {
          id: 1,
          title: "Занятие №1",
          performanceReportValue: "70",
          date: "29 Февраля 2019"
        },
        {
          id: 1,
          title: "Занятие №2",
          performanceReportValue: "34",
          date: "29 Февраля 2019"
        },
        {
          id: 1,
          title: "Занятие №3",
          performanceReportValue: "78",
          date: "29 Февраля 2019"
        },
        {
          id: 1,
          title: "Занятие №4",
          performanceReportValue: "79",
          date: "29 Февраля 2019"
        },
        {
          id: 1,
          title: "Занятие №5",
          performanceReportValue: "70",
          date: "29 Февраля 2019"
        }
      ]
    };
  }

  render() {
    const {
      ClassesList,
    } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Список занятий" subtitle="Занятия" className="text-sm-left" />
        </Row>

        <Row>
          {ClassesList.map((classes, idx) => (
            <Col lg="3" >
              <Card small className="card-post mb-3">
                <CardBody>
                  <Link to={`/classes/${classes.id}`} key={idx}>
                    <h5 className="card-title">{classes.title}</h5>
                  </Link>
                  <div className="progress-wrapper">
                    <strong className="text-muted d-block mb-2">
                      Посещаемость
                    </strong>
                    <Progress
                        className="progress-sm"
                        value={classes.performanceReportValue}
                    >
                      <span className="progress-value">
                        {classes.performanceReportValue}%
                      </span>
                    </Progress>
                  </div>
                </CardBody>
                <CardFooter className="border-top d-flex">
                  <div className="card-post__author d-flex">
                    <div className="d-flex flex-column justify-content-center ml-3">
                      <small className="text-muted">{classes.date}</small>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    );
  }
}

export default Classes;
