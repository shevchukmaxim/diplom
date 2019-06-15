import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import { Card, CardBody } from "shards-react";

import {getLessons} from "../../actions/lessons";
import {Link} from "react-router-dom";

class LessonsCounter extends React.Component {

  componentDidMount() {
    this.props.getLessons();
    };

  render() {
    const value = this.props.lessons.length;
    return (
      <Card small className="stats-small">
        <CardBody className="p-0 d-flex">
            <div className="d-flex flex-column m-auto stats-small__data text-center">
              <Link to="/departments">
                <span className="stats-small__label text-uppercase">Занятия</span>
              </Link>
              <h6 className="stats-small__value count my-3">{value}</h6>
            </div>
        </CardBody>
      </Card>
    );
  }
}

LessonsCounter.propTypes = {
  lessons: PropTypes.array.isRequired,
  getLessons: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  lessons: state.lessons.lessons
});

export default connect(mapStateToProps, {getLessons})(LessonsCounter);
