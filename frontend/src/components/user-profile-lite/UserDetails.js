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

const UserDetails = ({ userDetails }) => (
  <Card small className="mb-4 pt-3">
    <CardHeader className="border-bottom text-center">
      <div className="mb-3 mx-auto">
      </div>
      <h4 className="mb-0">Имя</h4>
      <span className="text-muted d-block mb-2">Должность</span>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="px-4">
        <div className="progress-wrapper">
          <strong className="text-muted d-block mb-2">
            Посещаемость
          </strong>
          <Progress
            className="progress-sm"
            value="70"
          >
            <span className="progress-value">
              70%
            </span>
          </Progress>
        </div>
      </ListGroupItem>
      <ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">
          Отдел
        </strong>
        <span>Бухгалтерия</span>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

UserDetails.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object
};


export default UserDetails;
