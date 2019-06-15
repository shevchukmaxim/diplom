import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import { Card, CardBody } from "shards-react";

import {getCourses} from "../../actions/courses";
import {Link} from "react-router-dom";

class CoursesCounter extends React.Component {

  static propTypes = {
    courses: PropTypes.array.isRequired,
    getCourses: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getCourses();
  };

  render() {
    const value = this.props.courses.length;
    return (
      <Card small className="stats-small">
        <CardBody className="p-0 d-flex">
            <div className="d-flex flex-column m-auto stats-small__data text-center">
              <Link to="/departments">
                <span className="stats-small__label text-uppercase">Курсы</span>
              </Link>
              <h6 className="stats-small__value count my-3">{value}</h6>
            </div>
        </CardBody>
      </Card>
    );
  }
}




const mapStateToProps = state => ({
  courses: state.courses.courses
});

export default connect(mapStateToProps, {getCourses})(CoursesCounter);
