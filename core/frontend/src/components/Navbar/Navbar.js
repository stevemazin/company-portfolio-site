import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import Logo from "../../images/logo.png";

const Nav = styled.div`
  background: seagreen;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
`;

class Navbar extends Component {
  render() {
    return (
      <Nav>
        <NavIcon to="#">
          <FaIcons.FaBars onClick={this.props.clicked} />
        </NavIcon>
      </Nav>
    );
  }
}

export default Navbar;
