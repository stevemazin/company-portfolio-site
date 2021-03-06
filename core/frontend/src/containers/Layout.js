import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/SideBar/SideBar";
import { createGlobalStyle } from "styled-components";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/index";

const GlobalStyle = createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    html, body {
        overflow-x: hidden;
    }
`;

class Layout extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Navbar clicked={this.props.onSidebarOpen} />
        <SideBar clicked={this.props.onSidebarClose} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ui: state.ui.isOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSidebarOpen: () => dispatch(actionCreators.openSideBar()),
    onSidebarClose: () => dispatch(actionCreators.closeSideBar()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
