import React from "react";
import styled from "styled-components";
import Burger from "../Burger";
import { NavLink as Link } from "react-router-dom";

const Nav = styled.nav`
  background: white;
  height: 130px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  margin-right: 5rem;
  margin-left: 5rem;
  z-index: 10;

  @media screen and (max-width: 768px) {
    margin-bottom: 0rem;
  }
`;

const NavLink = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    font-weight: bold;
  }
`;

const NavMenu = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/#">WORK</NavLink>
        <Burger />
        <NavMenu>
          <NavLink to="/LandingPage"><b>AL-OBAIDI</b>&nbsp;DESIGN</NavLink>
        </NavMenu>
        <NavLink to="/#">CONTACT</NavLink>
      </Nav>
    </>
  );
};

export default NavBar;
