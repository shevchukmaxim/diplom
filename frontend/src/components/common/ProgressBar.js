import React from "react";
import {connect} from 'react-redux';
import { Link, Redirect, withRouter} from "react-router-dom";
import PropTypes from "prop-types";

import {Row, Col, Card, CardHeader, CardBody, Button, ListGroup, ListGroupItem, Progress} from "shards-react";

class ProgressBar extends React.Component {
  render(){
    const participationPercent = 50;
    return(
      <Progress
        className="progress-sm"
        value={participationPercent}
        animated
      >
        <span className="progress-value">
          {participationPercent}%
        </span>
      </Progress>
    );
  }
}

export default ProgressBar;