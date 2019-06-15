import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {
  Card,
  CardHeader,
  CardBody,
} from "shards-react";

import Chart from "../../utils/chart";
import {getLessonsEmployees} from "../../actions/lessons_employees";

class LessonDiagramm extends React.Component {
  
  static propTypes = {
    getLessonsEmployees: PropTypes.func.isRequired,
    lessonsEmployees: PropTypes.array.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      lessonsEmployees: this.props.lessonsEmployees,
      chartData: {
        datasets: [
          {
            hoverBorderColor: "#ffffff",
            data: [1, 1, 1, 1],
            backgroundColor: [
              "rgba(0,123,255,0.9)",
              "rgba(0,123,255,0.5)",
              "rgba(0,123,255,0.3)",
              "rgba(0,123,255,0.1)"
            ]
          }
        ],
        labels: ["Отлично", "Хорошо", "Удовлетворительно", "Неудовлетворительно"]
      }
    };
    this.canvasRef = React.createRef();
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.lessonsEmployees != nextProps.lessonsEmployees){
      this.setState({lessonsEmployees: nextProps.lessonsEmployees})
    }
  };

  componentDidMount() {
    const chartConfig = {
      type: "pie",
      data: this.state.chartData,
      options: {
        ...{
          legend: {
            position: "bottom",
            labels: {
              padding: 25,
              boxWidth: 20
            }
          },
          cutoutPercentage: 0,
          tooltips: {
            custom: false,
            mode: "index",
            position: "nearest"
          }
        },
        ...this.state.chartOptions
      }
    };

    new Chart(this.canvasRef.current, chartConfig);
  }

  render() {
    var scores = [0,0,0,0];
    this.state.lessonsEmployees.map((lesson, index) => {
      switch (lesson.score) {
        case "5":
          scores[0] = scores[0] + 1;
          break;
        case "4":
          scores[1] = scores[1] + 1;
          break;
        case "3":
          scores[2] = scores[2] + 1;
          break;
        case "2":
          scores[3] = scores[3] + 1;
          break;
        default:
          break;
        }
    });
    this.state.chartData.datasets[0].data = scores;


    return (
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

const mapStateToProps = state => {
  var lessonsEmployees = state.lessons_employees.lessonsEmployees ? state.lessons_employees.lessonsEmployees.filter(lesson => lesson.lesson === state.lessons.lesson.id) : console.log('') ;
  return({
    lessonsEmployees: lessonsEmployees,
  })
};

export default connect(mapStateToProps, {getLessonsEmployees})(LessonDiagramm);
