import {Button, Card, CardBody, CardHeader, ListGroup, ListGroupItem} from "shards-react";
import React from "react";

class CoursStats extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    let participation = 0;
    let misses = 0;
    let average = 0;
    let scores = [];
    let sumScores = 0;


    // if (allLessons.length > 0) {
    //   let lessons = allLessons;
    //   participation = lessons.filter(lesson => lesson.participation === true).length;
    //   lessons.map(lesson => lesson.score ? scores.push(parseInt(lesson.score)) : console.log(''));
    //   misses = allLessons.length - participation;
    //   sumScores = scores.reduce((partial_sum, a) => partial_sum + a,0);
    //   average = sumScores / scores.length;
    // }

    return (
      <Card small className="mb-3">
        <CardHeader className="border-bottom">
          <h6 className="m-0">О курсе</h6>
        </CardHeader>

        <CardBody className="p-0">
          <ListGroup flush>
            <ListGroupItem className="p-3">
              <span className="d-flex mb-2">
                <i className="material-icons mr-1">people</i>
                <strong className="mr-1">Сотрудников на курсе:</strong>{" "}
                <strong className="mr-1">{this.props.coursesEmployees.length}</strong>{" "}
              </span>
              <span className="d-flex mb-2">
                <i className="material-icons mr-1">school</i>
                <strong className="mr-1">Занятий:</strong>{" "}
                <strong className="mr-1">{this.props.coursesLessons.length}</strong>{" "}
              </span>
              <span className="d-flex mb-2">
                <i className="material-icons mr-1">calendar_today</i>
                <strong className="mr-1">Дата начала:</strong>{" "}
                <strong className="mr-1">{this.props.cours.date && new Date(this.props.cours.date).toLocaleDateString('ru-Rus') }</strong>{" "}
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

export default CoursStats;