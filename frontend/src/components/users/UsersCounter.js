import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import { Card, CardBody } from "shards-react";

import {getUsers} from "../../actions/users";

class EmployeesCounter extends React.Component {

  componentDidMount() {
    this.props.getUsers();
    };

  render() {
    const value = this.props.users.length;
    return (
      <Card small className="stats-small">
        <CardBody className="p-0 d-flex">
            <div className="d-flex flex-column m-auto stats-small__data text-center">
              <Link to="/employees">
                <span className="stats-small__label text-uppercase">Пользователи</span>
              </Link>
              <h6 className="stats-small__value count my-3">{value}</h6>
            </div>
        </CardBody>
      </Card>
    );
  }
}

EmployeesCounter.propTypes = {
  users: PropTypes.array.isRequired,
  getUsers: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  users: state.users.users
});

export default connect(mapStateToProps, {getUsers})(EmployeesCounter);
