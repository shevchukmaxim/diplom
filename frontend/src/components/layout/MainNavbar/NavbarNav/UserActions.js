import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../../../actions/auth";
import { getEmployees } from "../../../../actions/employees";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";

export class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }

  componentDidMount() {
    this.props.getEmployees();
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    var employee = {};
    this.props.employees ? employee = this.props.employees.filter(employee => employee.user === user.id) : "";

    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3 mt-2">
          <span className="d-none d-md-inline-block">{user ? `${user.username}` : ""}</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={this.state.visible}>
          <DropdownItem>
            {employee.length > 0 ? <Link to={`/employee/${employee[0].emp_no}`}>Профиль</Link> : ""}
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem className="text-danger">
            <button className="btn btn-danger btn-sm"
              onClick={this.props.logout}
            >
              Выйти
            </button>
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  employees: state.employees.employees,
});

export default connect(
  mapStateToProps,
  { logout, getEmployees }
)(UserActions);
