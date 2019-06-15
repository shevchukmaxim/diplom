import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import { Card, CardBody } from "shards-react";

import {getDepartments} from "../../actions/departments";
import {Link} from "react-router-dom";

class DepartmentsCounter extends React.Component {

  componentDidMount() {
    this.props.getDepartments();
    };

  render() {
    const value = this.props.departments.length;
    return (
      <Card small className="stats-small">
        <CardBody className="p-0 d-flex">
            <div className="d-flex flex-column m-auto stats-small__data text-center">
              <Link to="/departments">
                <span className="stats-small__label text-uppercase">Отделы</span>
              </Link>
              <h6 className="stats-small__value count my-3">{value}</h6>
            </div>
        </CardBody>
      </Card>
    );
  }
}

DepartmentsCounter.propTypes = {
  departments: PropTypes.array.isRequired,
  getDepartments: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  departments: state.departments.departments
});

export default connect(mapStateToProps, {getDepartments})(DepartmentsCounter);
