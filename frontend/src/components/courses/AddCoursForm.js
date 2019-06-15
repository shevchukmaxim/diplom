import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  Button, Card, CardHeader, CardBody, FormTextarea
} from "shards-react";

import {getCourses, addCours, deleteCours} from "../../actions/courses";

export class AddCoursForm extends Component {

  state = {
    name: "",
    date: "",
    description: ""
  };

  static propTypes = {
    addCours: PropTypes.func.isRequired,
    deleteCours: PropTypes.func.isRequired,
    getCourses: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getCourses();
  };

  onChange = e => {
    const field = e.target.name ? e.target.name : 'description';
    this.setState({[field]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, date, description } = this.state;
    const cours = { name, date, description };
    if (this.props.addCours(cours, this.props.history)){
    this.setState({
      name: "",
      date: "",
      description: ""
    })
    }
  };

  render() {

    const { name, date, description } = this.state;
    return(
      <Row>
        <Col sm="12" md="8">
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Добавить курс</h6>
            </CardHeader>
            <CardBody className="p-0 pb-3">
              <Col sm="12" md="12">
                <Form onSubmit={this.onSubmit}>
                  <Row form>
                    <Col md="12" className="form-group">
                      <FormGroup>
                        <label htmlFor="last_name">Название</label>
                        <FormInput
                          type="text"
                          placeholder="Название курса"
                          name="name"
                          onChange={this.onChange}
                          value={name}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="12" className="form-group">
                      <FormGroup>
                        <label htmlFor="date">Дата начала</label>
                        <FormInput
                          type="date"
                          name="date"
                          onChange={this.onChange}
                          value={date}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <label htmlFor="description">Описание</label>
                    <FormTextarea value={description} onChange={this.onChange} />
                  </FormGroup>
                  <FormGroup>
                    <Button type="submit" pill outline theme="success" size="sm" className="mb-2">Применить</Button>
                  </FormGroup>
                </Form>
              </Col>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => ({
  courses: state.courses.courses
});

export default connect(mapStateToProps, { getCourses, addCours, deleteCours })(withRouter(AddCoursForm));
