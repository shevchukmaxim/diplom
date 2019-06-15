import React, {Component, Fragment} from 'react';
import { withAlert} from "react-alert";
import {connect} from "react-redux";
import PropTypes from 'prop-types';

export class Alerts extends Component {

  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if(error !== prevProps.error) {
      if (error.msg.first_name) alert.error(`Фамилия: ${error.msg.first_name.join()}`);
      if (error.msg.last_name) alert.error(`Имя: ${error.msg.last_name.join()}`);
      if (error.msg.middle_name) alert.error(`Отчество: ${error.msg.middle_name.join()}`);
      if (error.msg.gender) alert.error(`Пол: ${error.msg.middle_name.join()}`);
      if (error.msg.department) alert.error(`Отдел: ${error.msg.middle_name.join()}`);
      if (error.msg.cours) alert.error(`Курс: ${error.msg.middle_name.join()}`);
      if (error.msg.group) alert.error(`Группа: ${error.msg.middle_name.join()}`);
      if (error.msg.lesson) alert.error(`Занятие: ${error.msg.title.join()}`);
      if (error.msg.message)
        alert.error(`Сообщение: ${error.msg.message.join()}`);
      if (error.msg.non_field_errors)
        alert.error(error.msg.non_field_errors.join());
      if (error.msg.username) alert.error(error.msg.username.join());
    }

    if (message !== prevProps.message) {
      if (message.addEmployee) alert.success(message.addEmployee);
      if (message.addCours) alert.success(message.addCours);
      if (message.addLesson) alert.success(message.addLesson);
      if (message.addGroup) alert.success(message.addGroup);
      if (message.deleteEmployee) alert.success(message.deleteEmployee);
      if (message.updateEmployee) alert.success(message.updateEmployee);
      if (message.updateLesson) alert.success(message.updateLesson);
      if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));