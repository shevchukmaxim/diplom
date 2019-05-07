import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import PropTypes from "prop-types";

const ClassStudents = ({StudentDetails}) => (
  <Container fluid className="main-content-container px-4">

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Таблица сотрудников</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Фамилия
                  </th>
                  <th scope="col" className="border-0">
                    Имя
                  </th>
                  <th scope="col" className="border-0">
                    Отчество
                  </th>
                  <th scope="col" className="border-0">
                    Отдел
                  </th>
                  <th scope="col" className="border-0">
                    Посещение
                  </th>
                  <th scope="col" className="border-0">
                    Оценка
                  </th>
                </tr>
              </thead>
              <tbody>
              {StudentDetails.map((StudentDetails, idx) => (
                <tr>
                  <td>{StudentDetails.id}</td>
                  <td>{StudentDetails.firstName}</td>
                  <td>{StudentDetails.secondName}</td>
                  <td>{StudentDetails.middleName}</td>
                  <td>{StudentDetails.department}</td>
                  <td>{StudentDetails.attendance}</td>
                  <td>{StudentDetails.score}</td>
                </tr>
              ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

ClassStudents.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object
};

ClassStudents.defaultProps = {
  StudentDetails: [
    {
    id: "1",
    firstName: "Антонов",
    secondName: "Антон",
    middleName: "Антонович",
    department: "Бухгалтерия",
    attendance: "Был",
    score: "Отлично"
  },
  {
    id: "2",
    firstName: "Иванов",
    secondName: "Иван",
    middleName: "Иванович",
    department: "HR",
    attendance: "Не был",
    score: "-"
  }
]};


export default ClassStudents;
