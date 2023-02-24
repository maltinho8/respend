import React from "react";
import styled from "styled-components";
import "./index.css";
import MainPageImage from "../../../assets/img/mainpage.png";

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

const ContentLandingPage = () => {
  return (
    <Container>
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
          <div className="imageMain"></div>
        </div>
      </BackgroundContainer>
      <br />
      <br />
      <ContentContainerFull
        style={{
          backgroundColor: "#8ed39980",
          width: "100vw",
          paddingTop: "4rem",
          paddingBottom: "4rem",
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
      <br />
      <br />
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
            <TextDIVCircle>45.000+ eingesammelte Becher </TextDIVCircle>
            <TextDIVCircle>145 unterstützte Organisationen </TextDIVCircle>
          </div>
          <img src={MainPageImage} alt=""></img>
        </div>
      </CircleContainer>
      <br />
      <br />
      <TextDIV style={{ textAlign: "center" }}>
        Alles so wie immer. Nur besser.
      </TextDIV>
      <br />
      <br />
      <br />
      <BackgroundContainer id="anchor1">
        <div className="wrapper">
          <div id="textOne">
            <br />
            <p style={{ fontSize: "0.8rem" }}>1. Getränk kaufen</p>
            <TextDIVGreenList style={{ whiteSpace: "pre-line" }}>
              Wie immer: Besucher*innen holen sich ein Getränk
            </TextDIVGreenList>
            <p style={{ fontSize: "0.8rem" }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
          <div id="pictureOne"></div>
        </div>
      </BackgroundContainer>
      <BackgroundContainer>
        <div className="wrapper">
          <div id="pictureTwo"></div>
          <div id="textTwo">
            <br />
            <p style={{ fontSize: "0.8rem" }}>2. Genießen</p>
            <TextDIVGreenList style={{ whiteSpace: "pre-line" }}>
              Wie immer: Veranstaltung genießen mit einem Getränk
            </TextDIVGreenList>
            <p style={{ fontSize: "0.8rem" }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
        </div>
      </BackgroundContainer>
      <BackgroundContainer>
        <div className="wrapper">
          <div id="textThree">
            <br />
            <p style={{ fontSize: "0.8rem" }}>3. Aber besser</p>
            <TextDIVGreenList style={{ whiteSpace: "pre-line" }}>
              Mit wenig Aufwand Gutes tun!
            </TextDIVGreenList>
            <p style={{ fontSize: "0.8rem" }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
          <div id="pictureThree"></div>
        </div>
      </BackgroundContainer>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <BackgroundContainer>
        <div className="wrapper">
          <div id="pictureImpact"></div>
          <div id="textImpact">
            <br />
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
          </div>
        </div>
      </BackgroundContainer>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <TextDIV style={{ textAlign: "center" }}>
        Für jede Veranstaltung das passende Konzept
      </TextDIV>
      <Text style={{ textAlign: "center" }}>
        Wir bieten für jede Veranstaltung das passende Rückgabesystem. Mit
        verschiedenen Aufstellervarianten sorgt RESPEND für ihren individuellen
        Bechertypen die Lösung.
      </Text>
      <br />
      <br />
      <div className="partner">
        <img src={MainPageImage} alt="1"></img>
        <img src={MainPageImage} alt="2"></img>
        <img src={MainPageImage} alt="3"></img>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <BackgroundContainer id="anchor2">
        <div className="wrapper">
          <div id="pictureContact"></div>
          <div id="textContact">
            <br />

            <TextDIVGreenList style={{ whiteSpace: "pre-line" }}>
              RESPEND? Das brauchen wir!
            </TextDIVGreenList>
            <p style={{ fontSize: "0.8rem" }}>
              Sie haben eine Veranstaltung, die mit RESPEND ausgestattet werden
              soll? Werden Sie Teil des Wandels mithilfe des nachhaltigen
              Rückgabesystems von RESPEND.
            </p>

            <button
              onClick={() =>
                (window.location = "mailto:max.mustermann@berlin.com")
              }
            >
              Kontaktieren Sie uns!
            </button>
          </div>
        </div>
      </BackgroundContainer>
      <br />
      <br />
      <br />
      <br />
      <br />
      <TextDIV style={{ textAlign: "center" }}>
        Diese Unternehmen vertrauen bereits auf uns:
      </TextDIV>
      <br />
      <br />
      <div className="partner">
        <img
          src="https://cdn.prod.www.spiegel.de/images/0b15a7e0-0001-0004-0000-000001095938_w920_r1_fpx50_fpy50.jpg"
          alt="1"
        ></img>
        <img
          src="https://img.fcbayern.com/image/upload/q_auto,f_auto/cms/public/images/fcbayern-com/logos/bundesliga/480px-logo_fc_bayern_munchen.svg.png"
          alt="2"
        ></img>
        <img
          src="https://sportbild.bild.de/fotos/mobil-buli-vereinskacheln-leipzig-46828330/Bild/3.sport.jpg"
          alt="3"
        ></img>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhjUbd-sf9_LjMKEOuipqcYA5MhNbNgymm-w&usqp=CAU"
          alt="4"
        ></img>
        <img
          src="https://cdn.prod.www.spiegel.de/images/baf72d61-0001-0004-0000-000001095956_w920_r1_fpx50_fpy50.jpg"
          alt="5"
        ></img>
      </div>
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
};

export default ContentLandingPage;
