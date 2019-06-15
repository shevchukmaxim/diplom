import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import { Card, CardBody } from "shards-react";

import {getGroups} from "../../actions/groups";

class EmployeesCounter extends React.Component {

  componentDidMount() {
    this.props.getGroups();
    };

  render() {
    const value = this.props.groups.length;
    return (
      <Card small className="stats-small">
        <CardBody className="p-0 d-flex">
            <div className="d-flex flex-column m-auto stats-small__data text-center">
              <Link to="/employees">
                <span className="stats-small__label text-uppercase">Группы</span>
              </Link>
              <h6 className="stats-small__value count my-3">{value}</h6>
            </div>
        </CardBody>
      </Card>
    );
  }
}

EmployeesCounter.propTypes = {
  groups: PropTypes.array.isRequired,
  getGroups: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  groups: state.group.groups
});

export default connect(mapStateToProps, {getGroups})(EmployeesCounter);
