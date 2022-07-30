import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Text = styled(Link)`
    color: ${({ theme }) => theme.palette.text.light};
    font-size: 1rem;
    margin-left: 10rem;
    font-weight: 500;
    cursor: pointer;
    @media screen and (max-width: 900px) {
      margin: 0;
      transition: ease all .5s;
      margin-top: 50px;
      font-size: 1.5rem;
      &:hover {
        color: #fbbe01;
      }
     
    }
  `;


const Container = styled.div`
@media (max-width: 900px) {
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
}
`

/* Nutzung der Methode closeMenu durch Übergabe in rightnav.js  */
const Content = ({closeMenu}) => {
    
    return(

        <Container>
          <br/>
        {/* durch onClick - closeMenu wird genutzt, um beim Klicken des Links das Menü zu schließen  */}
        
        <Text onClick={closeMenu} to="/Produkte" style={{ textDecoration: 'none', color: 'white' }}>3D-Modellierung</Text>
        <Text onClick={closeMenu} to="/Projekte" style={{ textDecoration: 'none', color: 'white' }}>Tutorial</Text>
        <Text onClick={closeMenu} to="/Über uns" style={{ textDecoration: 'none', color: 'white' }}>Über uns</Text>
        <Text onClick={closeMenu} to="/FAQ" style={{ textDecoration: 'none', color: 'white' }}>Impressum</Text>
        </Container>


    );
};

export default Content;