import React, { useState } from "react";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
    border-left: 4px solid #622ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;
const DropDownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;
const SubMenu = ({ item }) => {
  const [subnav, setShowSubNav] = useState(false);
  const showSubNav = () => {
    return setShowSubNav(!subnav);
  };

  return (
    <IconContext.Provider value={{ color: "seagreen" }}>
      <SidebarLink to={item.path} onClick={item.subNav && showSubNav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropDownLink to={item.path} key={index}>
              {item.iccon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropDownLink>
          );
        })}
    </IconContext.Provider>
  );
};

export default SubMenu;
