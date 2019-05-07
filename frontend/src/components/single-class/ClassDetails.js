import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,
  Progress
} from "shards-react";

const ClassDetails = ({ classDetails }) => (
  <Card small className="mb-4 pt-3">
    <CardHeader className="border-bottom text-center">
      <h4 className="mb-0">{classDetails.name}</h4>
      <span className="text-muted d-block mb-2">{classDetails.jobTitle}</span>
      <Button pill outline size="sm" className="mb-2">
        <i className="material-icons mr-1">edit</i> Изменить
      </Button>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="px-4">
        <div className="progress-wrapper">
          <strong className="text-muted d-block mb-2">
            {classDetails.performanceReportTitle}
          </strong>
          <Progress
            className="progress-sm"
            value={classDetails.performanceReportValue}
          >
            <span className="progress-value">
              {classDetails.performanceReportValue}%
            </span>
          </Progress>
        </div>
      </ListGroupItem>
      <ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">
          {classDetails.metaTitle}
        </strong>
        <span>{classDetails.metaValue}</span>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

ClassDetails.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object
};

ClassDetails.defaultProps = {
  classDetails: {
    name: "Занятие №1",
    jobTitle: "Тема: Вводное занятие",
    performanceReportTitle: "Посещение",
    performanceReportValue: 74,
    metaTitle: "Описание",
    metaValue:
      "На первом занятии проводится вводная лекция с тестом в конце."
  }
};

export default ClassDetails;
