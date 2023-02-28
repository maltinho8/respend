import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Text = styled(Link)`
  color: white;
  font-size: 1rem;

  margin-left: 10rem;
  font-weight: 500;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-weight: 800;
    margin: 0;
    transition: ease all 0.5s;
    margin-top: 50px;
    font-size: 1.5rem;
    &:hover {
      color: #fbbe01;
    }
  }
`;

const Container = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

/* Nutzung der Methode closeMenu durch Übergabe in rightnav.js  */
const Content = ({ closeMenu }) => {
  return (
    <Container>
      <br />
      <br />
      <br />
      <br />
      {/* durch onClick - closeMenu wird genutzt, um beim Klicken des Links das Menü zu schließen  */}

      <Text
        onClick={closeMenu}
        to="/LandingPage"
        style={{ textDecoration: "none" }}
      >
        ReSpend
      </Text>

      <Text
        onClick={closeMenu}
        to="/Impressum"
        style={{ textDecoration: "none" }}
      >
        Impressum
      </Text>
    </Container>
  );
};

export default Content;
