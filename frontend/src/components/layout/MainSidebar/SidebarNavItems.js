import React from "react";
import { Nav } from "shards-react";
import { connect } from "react-redux";

import SidebarNavItem from "./SidebarNavItem";
import { Store } from "../../../flux";
import {register} from "../../../actions/auth";
import {createMessage} from "../../../actions/messages";
import {Register} from "../../accounts/Register";

class SidebarNavItems extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      navItems: Store.getSidebarItems()
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    Store.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      ...this.state,
      navItems: Store.getSidebarItems()
    });
  }

  render() {
    var { navItems: items } = this.state;
    items = this.props.auth.user.is_superuser ? items : items.filter(item => item.title != 'Пользователи');

    return (
      <div className="nav-wrapper">
        <Nav className="nav--no-borders flex-column">
          {items.map((item, idx) => {
            return (
            <SidebarNavItem key={idx} item={item} />
          )})}
        </Nav>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(SidebarNavItems);
