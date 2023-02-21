import React from "react";
import styled from "styled-components";
import "./index.css";
import ImageList from "../../ImageList";
import MainPageImage from "../../../assets/img/mainpage.png";
import Numbers from "./numbers";

const Container = styled.div``;

const Text = styled.p`
  color: #0b3c4d;
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    text-align: center;
  }
`;

const TextDIVGreen = styled.p`
  font-size: 2.5rem;
  color: #14ce87;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const TextDIVGreenList = styled.p`
  font-size: 1.5rem;
  color: #14ce87;
  font-weight: 400;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const TextDIV = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: #0b3c4d;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const TextDIVCircle = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: #0b3c4d;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const BackgroundContainer = styled.div`
  width: 100vw;
  background-color: white;
`;

const ChildOne = styled.div`
  display: inline-block;
  padding: 1rem 1rem;
  vertical-align: middle;
  width: 550px;
  height: 550px;

  text-align: left;
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    text-align: center;
    margin-right: 0px;
  }
`;

const ChildOneList = styled.div`
  display: inline-block;
  padding: 1rem 1rem;
  vertical-align: middle;
  width: 325px;
  height: 125px;
  text-align: left;
  margin-right: 180px;
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    text-align: center;
    margin-right: 0px;
  }
`;

const ChildOneList2 = styled.div`
  display: inline-block;
  padding: 1rem 1rem;
  vertical-align: middle;
  width: 325px;
  height: 125px;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    text-align: center;
    margin-right: 0px;
  }
`;

const ChildOneList2Impact = styled.div`
  display: inline-block;
  padding: 1rem 1rem;
  vertical-align: middle;
  width: 425px;
  height: 125px;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    text-align: center;
    margin-right: 0px;
  }
`;

const ChildTwo = styled.div`
  width: 100vw;
  background-color: white;
`;

const ContentContainer = styled.div`
  margin-left: 15rem;
  margin-right: 15rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    margin-left: 3rem;
    margin-right: 3rem;
    display: block;
  }
`;

const CircleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ContentContainerFull = styled.div`
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
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
      {/*
      <Background></Background>
      <BackgroundContainer>
        <ContentContainer>
          <Boxes>
            <Text>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </Text>
          </Boxes>
        </ContentContainer>
      </BackgroundContainer>
  */}
      <BackgroundContainer>
        <div className="parent">
          <ChildOne>
            <TextDIVGreen style={{ whiteSpace: "pre-line" }}>
              {"<br/>Becher zurückgeben und Gutes tun?<br/><br/>"
                .split("<br/>")
                .join("\n")}
            </TextDIVGreen>
            <TextDIV style={{ whiteSpace: "pre-line" }}>
              {"Dann<br/>RESPEND".split("<br/>").join("\n")}
            </TextDIV>
            <br />
            <p style={{ fontSize: "0.8rem" }}>
              <b>Respend</b> revolutioniert das Zusammenspiel aus Nachhaltigkeit
              und Pfandrückgabesystem.
            </p>
          </ChildOne>
          <div className="child2"></div>
        </div>
      </BackgroundContainer>

      <ContentContainerFull
        style={{
          backgroundColor: "#8ed39980",
          width: "100vw",
          padding: "0.5rem",
        }}
      >
        <TextDIV style={{ textAlign: "center" }}>
          Es ruft nach einem Wandel
        </TextDIV>
        <Text style={{ textAlign: "center" }}>
          In Deutschland werden jedes Jahr 5.8 Milliarden Getränkebecher
          benutzt.
        </Text>
        <Text style={{ textAlign: "center" }}>104 Becher pro Sekunde</Text>
        <Text style={{ textAlign: "center" }}>11.000 Becher pro Minute</Text>
        <Text style={{ textAlign: "center" }}>600.000 Becher pro Stunde</Text>
        <Text style={{ textAlign: "center" }}>16.000.000 Becher pro Tag</Text>
      </ContentContainerFull>
      <ContentContainer>
        <TextDIV style={{ textAlign: "center" }}>
          Die Welt verbessern ohne Investitionskosten!
        </TextDIV>
        <Text style={{ textAlign: "center" }}>
          RESPEND stattet Ihre Veranstaltung in Zusammenarbeit mit
          Spendenorganisationen aus.
        </Text>
        <Text style={{ textAlign: "center" }}>
          Keine Investitionskosten, kein Aufwand, sondern Gutes tun!
        </Text>
      </ContentContainer>
      <br />
      <TextDIV style={{ textAlign: "center" }}>
        Der Impact von Respend bisher
      </TextDIV>
      <CircleContainer>
        <div className="card">
          <div className="circle"></div>
          <div className="content">
            <TextDIVCircle>90.000+ zurückgegebene Becher</TextDIVCircle>
            <TextDIVCircle>XXX eingesammelte Becher </TextDIVCircle>
            <TextDIVCircle>XXX unterstützte Organisationen </TextDIVCircle>
          </div>
          <img src={MainPageImage} alt=""></img>
        </div>
      </CircleContainer>
      <br />
      <br />
      <TextDIV style={{ textAlign: "center" }}>
        Alles so wie immer. Nur besser.
      </TextDIV>
      <BackgroundContainer>
        <div className="parentList">
          <ChildOneList>
            <p style={{ fontSize: "0.8rem" }}>1. Getränk kaufen</p>
            <TextDIVGreenList style={{ whiteSpace: "pre-line" }}>
              Wie immer: Besucher*innen holen sich ein Getränk
            </TextDIVGreenList>
          </ChildOneList>
          <div className="childList2"></div>
        </div>
      </BackgroundContainer>
      <br />
      <br />
      <br />
      <BackgroundContainer>
        <div className="parentList">
          <div className="child2List2"></div>
          <ChildOneList2>
            <p style={{ fontSize: "0.8rem" }}>2. Genießen</p>
            <TextDIVGreenList style={{ whiteSpace: "pre-line" }}>
              Wie immer: Veranstaltung genießen mit einem Getränk
            </TextDIVGreenList>
          </ChildOneList2>
        </div>
      </BackgroundContainer>
      <br />
      <br />
      <br />
      <BackgroundContainer>
        <div className="parentList">
          <ChildOneList>
            <p style={{ fontSize: "0.8rem" }}>3. Aber besser:</p>
            <TextDIVGreenList style={{ whiteSpace: "pre-line" }}>
              Mit wenig Aufwand Gutes tun!
            </TextDIVGreenList>
            <p style={{ fontSize: "0.8rem" }}>
              Besucher*innen bringen Ihren Becher zurück zu einem Aufsteller von
              Respend, sparen Zeit und spenden den Pfand für einen guten Zweck!
            </p>
          </ChildOneList>
          <div className="childList2"></div>
        </div>
      </BackgroundContainer>
      <br />
      <br />
      <br />
      <ContentContainerFull
        style={{
          backgroundColor: "#8ed39980",
          width: "100vw",
          padding: "2.5rem",
        }}
      >
        <div className="parentListImpact">
          <div className="child2List2Impact"></div>
          <ChildOneList2Impact>
            <p style={{ fontSize: "0.8rem" }}>
              Mit jedem Becher in den Aufstellern von Respend tust du etwas
              Gutes.
            </p>
            <TextDIVGreenList style={{ whiteSpace: "pre-line" }}>
              Kleiner Betrag mit großer Wirkung
            </TextDIVGreenList>
            <p style={{ fontSize: "0.8rem" }}>
              Genieß deine Veranstaltung mit weniger Zeit in den Schlangen und
              nutze deinen Becher für eine große Wirkung.
            </p>
          </ChildOneList2Impact>
        </div>
      </ContentContainerFull>

      {/*

      <div id="yourAnchorTag">
        <ImageList />
      </div>
*/}
    </Container>
  );
};

export default ContentLandingPage;
