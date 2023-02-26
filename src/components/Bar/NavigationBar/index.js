import React, { useEffect } from "react";
import styled from "styled-components";
import Burger from "../Burger";
import Logo from "../../../assets/img/logo.png";

const Nav = styled.nav`
  background: white;
  height: 110px;
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

const LinkedA = styled.a`
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
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenu = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBar = () => {
  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  return (
    <>
      <Nav>
        <LinkedA
          href="/"
          onClick={(e) => {
            let hero = document.getElementById("anchor1");
            e.preventDefault();
            hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
            window.history.pushState("hero", "hero", "/LandingPage");
          }}
        >
          Was macht Respend?
        </LinkedA>
        <Burger />
        <NavMenu to="/LandingPage">
          <img
            src={Logo}
            alt="logo"
            style={{
              aspectRatio: "4/3",
              objectFit: "contain",
            }}
          ></img>
          {/*
          <NavLink to="/LandingPage" style={{ fontSize: "25px" }}>
            <b>RESPEND</b>
          </NavLink>*/}
        </NavMenu>
        <LinkedA
          href="/"
          onClick={(e) => {
            let hero = document.getElementById("anchor2");
            e.preventDefault();
            hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
            window.history.pushState("hero", "hero", "/LandingPage");
          }}
        >
          Kontakt
        </LinkedA>
      </Nav>
    </>
  );
};

export default NavBar;
