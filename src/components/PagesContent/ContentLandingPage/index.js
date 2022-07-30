import React from "react";
import styled from "styled-components";
import "./index.css";
import ImageList from "../../ImageList";

const Container = styled.div``;

const Text = styled.p`
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    text-align: center;
  }
`;

const BackgroundContainer = styled.div`
  width: 100vw;
  background-color: white;
`;

const ContentContainer = styled.div`
  margin-top: 5rem;
  margin-left: 15rem;
  margin-right: 15rem;
  margin-bottom: 5rem;
  @media screen and (max-width: 768px) {
    margin-left: 3rem;
    margin-right: 3rem;
    display: block;
  }
`;

const Boxes = styled.div`
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0px 12px 18px -6px rgba (0, 0, 0, 0.3);
  border-radius: 10px 10px 10px 10px;
  object-fit: contain;
`;

const Background = styled.div`
  background-image: url("https://www.daviderizzoarchitects.com/dynamic-images?src=https://www.daviderizzoarchitects.com/app/uploads/2021/04/1-LA-B-001-Kopie.jpg&w=1600&h=0&crop=default&token=k?B2a3QNPRZjg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 80vh;
  position: relative;
`;

const ContentLandingPage = () => {
  

  return (
    <Container>
      <Background>
      
      </Background>
      <BackgroundContainer>
        <ContentContainer>
          <Boxes>
            <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Text>
          </Boxes>
        </ContentContainer>
        
        
       
      </BackgroundContainer>
      <div id= "yourAnchorTag">
        <ImageList />
      </div>
    </Container>
  );
};

export default ContentLandingPage;
