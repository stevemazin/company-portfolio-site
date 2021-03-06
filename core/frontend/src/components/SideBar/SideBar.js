import React, { Component } from "react";
import * as AiIcons from "react-icons/ai";
import styled from "styled-components";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { SidebarData } from "./SideBarData";
import SubMenu from "./SubMenu/SubMenu";

const SidebarNav = styled.nav`
  background-color: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${(props) => (props.show ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
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

const SidebarWrapper = styled.div`
  width: 100%;
`;

class SideBar extends Component {
  render() {
    return (
      <SidebarNav show={this.props.ui}>
        <SidebarWrapper>
          <NavIcon to="#">
            <AiIcons.AiOutlineClose onClick={this.props.clicked} />
          </NavIcon>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrapper>
      </SidebarNav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ui: state.ui.isOpen,
  };
};

export default connect(mapStateToProps)(SideBar);
