import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Progress
} from "shards-react";

class EmployeeDetails extends React.Component {

  constructor(props) {
    super(props);
  };

  render() {

    var participation = 0;
    var allstudents = 0;

    this.props.lessons.map((lesson, index) => {
      allstudents++;
      if (lesson.participation)
        participation++;
    });
    const participationPercent = Math.round(participation/allstudents*100);

    return (
      <Card small className="mb-4 pt-3">
        <CardHeader className="border-bottom text-center">
          <div className="mb-3 mx-auto">
          </div>
          <h4 className="mb-0">{this.props.employee ? this.props.employee.full_name : 'none'}</h4>
        </CardHeader>
        <ListGroup flush>
          <ListGroupItem className="px-4">
            <div className="progress-wrapper">
              <strong className="text-muted d-block mb-2">
                Посещаемость
              </strong>
              <Progress
                className="progress-sm"
                value={participationPercent}
              >
            <span className="progress-value">
              {participationPercent}%
            </span>
              </Progress>
            </div>
          </ListGroupItem>
          <ListGroupItem className="p-4">
            <strong className="text-muted d-block mb-2">
              Отдел
            </strong>
            <span>{this.props.employee ? this.props.employee.department_name : 'none'}</span>
          </ListGroupItem>
        </ListGroup>
      </Card>
    );
  }
}

export default EmployeeDetails;
