import React from "react";
import styled from "styled-components";
import "./index.css";
import MainPageImage from "../../../assets/img/pictureThird.png";
import Logo from "../../../assets/img/logo.png";

const Container = styled.div``;

const Text = styled.p`
  color: #0b3c4d;
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    text-align: center;
  }
`;

const TextDIVGreen = styled.p`
  font-size: 70px;
  color: #14ce87;
  font-weight: 900;
  margin-top: 25px;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const TextDIVGreenList = styled.p`
  font-size: 1.5rem;
  color: #14ce87;
  font-weight: 700;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const TextDIVHeading = styled.p`
  font-size: 65px;
  font-weight: 800;
  color: #0b3c4d;
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
  margin-bottom: 8rem;
`;

const ChildOne = styled.div`
  display: inline-block;

  vertical-align: middle;
  width: 550px;
  height: 550px;
  margin-bottom: 40px;
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
  margin-bottom: 6rem;
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
  margin-bottom: 6rem;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 6rem;
  @media screen and (max-width: 768px) {
    margin-bottom: 0rem;
  }
`;

const ContentLandingPage = () => {
  return (
    <Container>
      <BackgroundContainer>
        <div className="parent">
          <ChildOne>
            <TextDIVGreen style={{ marginBottom: "0" }}>
              {"Becher zurückgeben und Gutes tun?".split("<br/>").join("\n")}
            </TextDIVGreen>
            <TextDIVHeading
              style={{
                whiteSpace: "pre-line",
                marginTop: "0",
                marginBottom: "0",
              }}
            >
              {"Dann<br/>RESPEND".split("<br/>").join("\n")}
            </TextDIVHeading>

            <p style={{ fontSize: "0.8rem", marginBottom: "20px" }}>
              <b>DANK RESPEND</b> werden Becher zum Treiber für soziales
              Engagement. Wir wollen das Zusammenspiel aus Nachhaltigkeit und
              Pfandrückgabesystemen auf Veranstaltungen revolutionieren.
            </p>
            <button
              onClick={() =>
                (window.location = "mailto:max.mustermann@berlin.com")
              }
            >
              Kontaktieren Sie uns!
            </button>
          </ChildOne>
          <div className="imageMain"></div>
        </div>
      </BackgroundContainer>

      <ContentContainer>
        <TextDIV style={{ textAlign: "center" }}>
          Die Welt verbessern ohne Investitionskosten!
        </TextDIV>
        <Text style={{ textAlign: "center" }}>
          RESPEND stattet Ihre Veranstaltung in Zusammenarbeit mit
          Spendenorganisationen aus.
        </Text>
        <Text style={{ textAlign: "center" }}>
          <b>Keine Investitionskosten, kein Aufwand, sondern Gutes tun!</b>
        </Text>
      </ContentContainer>
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
          In Deutschland werden jedes Jahr{" "}
          <b> 5.8 Milliarden Getränkebecher </b> benutzt.
        </Text>

        <CircleContainer>
          <div className="card">
            <div className="circle"></div>
            <div className="content">
              <TextDIVCircle>104 Becher pro Sekunde</TextDIVCircle>
              <TextDIVCircle style={{ marginLeft: "30px" }}>
                11.000 Becher pro Minute{" "}
              </TextDIVCircle>
              <TextDIVCircle style={{ marginLeft: "60px" }}>
                600.000 Becher pro Stunde{" "}
              </TextDIVCircle>
              <TextDIVCircle style={{ marginLeft: "90px" }}>
                16.000.000 Becher pro Tag
              </TextDIVCircle>
            </div>
            <img src={MainPageImage} alt=""></img>
          </div>
        </CircleContainer>
      </ContentContainerFull>
      {/*
      <BackgroundContainer>
        <div>
          <div id="textContact">
            <br />
            <TextDIVGreenList style={{ whiteSpace: "pre-line" }}>
              Der Impact von Respend bisher
            </TextDIVGreenList>
            <div
              style={{ display: "flex", justifyContent: "center", gap: "80px" }}
            >
              <TextDIVGreen>90k</TextDIVGreen>
              <TextDIVGreen>45k</TextDIVGreen>
              <TextDIVGreen>145</TextDIVGreen>
            </div>
          </div>
        </div>
      </BackgroundContainer>
      */}
      <TextDIV style={{ textAlign: "center" }}>
        Alles so wie immer. Nur besser.
      </TextDIV>

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
        <div className="wrapperTwo">
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

      <TextDIV style={{ textAlign: "center" }}>
        Für jede Veranstaltung das passende Konzept
      </TextDIV>
      <Text style={{ textAlign: "center" }}>
        Wir bieten für jede Veranstaltung das passende Rückgabesystem. Mit
        verschiedenen Aufstellervarianten sorgt RESPEND für ihren individuellen
        Bechertypen die Lösung.
      </Text>

      <div className="partner">
        <img src={MainPageImage} alt="1"></img>
        <img src={MainPageImage} alt="2"></img>
        <img src={MainPageImage} alt="3"></img>
      </div>

      <BackgroundContainer id="anchor2">
        <div className="wrapper">
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
              Schreiben Sie uns eine Mail!
            </button>
            <p style={{ fontSize: "0.8rem" }}>
              oder rufen Sie uns an unter:{" "}
              <button onClick={() => window.open("tel:0123/456789")}>
                0123/456789
              </button>
            </p>
          </div>
        </div>
      </BackgroundContainer>
      {/*

      <TextDIV style={{ textAlign: "center" }}>
        Diese Unternehmen vertrauen bereits auf uns:
      </TextDIV>

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
            */}
      <LogoContainer>
        <img src={Logo} alt="logo" width={220} height={120}></img>
      </LogoContainer>
    </Container>
  );
};

export default ContentLandingPage;
