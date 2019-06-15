import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {
  Card,
  CardHeader,
  CardBody,
} from "shards-react";

import Chart from "../../utils/chart";

class CoursDiagramm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.canvasRef = React.createRef();
  }

  render() {
    var myDoughnutChart = new Chart(this.canvasRef.current, {
      type: 'doughnut',
      data : {
        datasets: [{
          data: [10, 20, 30]
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
          'Red',
          'Yellow',
          'Blue'
        ]
      }
    });
    return(
      <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Результаты</h6>
        </CardHeader>
        <CardBody className="d-flex py-0">
          <canvas
            height="220"
            ref={this.canvasRef}
            className="blog-users-by-device m-auto"
          />
        </CardBody>
      </Card>
    );
  }
}

export default CoursDiagramm;


