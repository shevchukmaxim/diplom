import {Button, Card, CardBody, CardHeader, ListGroup, ListGroupItem} from "shards-react";
import React from "react";

class EmployeeStats extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const allLessons = this.props.lessons;
    let participation = 0;
    let misses = 0;
    let average = 0;
    let scores = [];
    let sumScores = 0;


    if (allLessons.length > 0) {
      let lessons = allLessons;
      participation = lessons.filter(lesson => lesson.participation === true).length;
      lessons.map(lesson => lesson.score ? scores.push(parseInt(lesson.score)) : console.log(''));
      misses = allLessons.length - participation;
      sumScores = scores.reduce((partial_sum, a) => partial_sum + a,0);
      average = sumScores / scores.length;
      average = Math.round(average * 10) / 10;
    }

    return (
      <Card small className="mb-3">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Статистика</h6>
        </CardHeader>

        <CardBody className="p-0">
          <ListGroup flush>
            <ListGroupItem className="p-3">
              <span className="d-flex mb-2">
                <i className="material-icons mr-1">flag</i>
                <strong className="mr-1">Посещено занятий</strong>{" "}
                <strong className="mr-1">{participation}</strong>{" "}
              </span>
              <span className="d-flex mb-2">
                <i className="material-icons mr-1">calendar_today</i>
                <strong className="mr-1">Пропущено занятий:</strong>{" "}
                <strong className="text-danger">{misses}</strong>{" "}
              </span>
              <span className="d-flex mb-2">
                <i className="material-icons mr-1">timeline</i>
                <strong className="mr-1">Средний балл:</strong>{" "}
                <strong className="text-success">{average ? average : ''}</strong>{" "}
              </span>
            </ListGroupItem>
            {/*<ListGroupItem className="d-flex px-3 border-0">*/}
            {/*  <Button outline theme="accent" size="sm">*/}
            {/*    <i className="material-icons">save</i> Save Draft*/}
            {/*  </Button>*/}
            {/*  <Button theme="accent" size="sm" className="ml-auto">*/}
            {/*    <i className="material-icons">file_copy</i> Publish*/}
            {/*  </Button>*/}
            {/*</ListGroupItem>*/}
          </ListGroup>
        </CardBody>
      </Card>
    );
  }
}

export default EmployeeStats;