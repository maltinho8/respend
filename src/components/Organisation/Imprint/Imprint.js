import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-right: 5rem;
  margin-left: 5rem;
`;

const SubContainer = styled.div`
  margin-bottom: 1rem;
`;

const Headline = styled.h3`
  line-height: 1;
  margin-bottom: 2rem;
  color: #0b3c4d;
`;

const HeadlineSmall = styled.div`
  font-size: 1rem;
  color: #0b3c4d;
  line-height: 1.8;
`;

const TextSmall = styled.div`
  font-size: 0.8rem;
  color: #0b3c4d;
  line-height: 1.4;
`;

const Imprint = () => {
  return (
    <Container>
      <Headline>Impressum</Headline>
      <Headline>Angaben gemäß § 5 TMG</Headline>
      <SubContainer>
        <HeadlineSmall>Kontakt</HeadlineSmall>
        <TextSmall>E-Mail: info@respend.com</TextSmall>
        <TextSmall>Tel: 012/3456789</TextSmall>
        <TextSmall>Für Presseanfragen: press@respend.com</TextSmall>
        <TextSmall>Für Supportanfragen: support@respend.com</TextSmall>
      </SubContainer>
      <SubContainer>
        <HeadlineSmall>Firmenadresse</HeadlineSmall>
        <TextSmall>Respend Verwaltung GmbH</TextSmall>
        <TextSmall>Mustermannstraße 1</TextSmall>
        <TextSmall>12345 Berlin</TextSmall>
        <TextSmall>Deutschland</TextSmall>
      </SubContainer>
      <SubContainer>
        <HeadlineSmall>Büroanschrift</HeadlineSmall>
        <TextSmall>Respend Verwaltung GmbH</TextSmall>
        <TextSmall>Mustermannstraße 1</TextSmall>
        <TextSmall>12345 Berlin</TextSmall>
        <TextSmall>Deutschland</TextSmall>
      </SubContainer>
      <SubContainer>
        <HeadlineSmall>Geschäftsführung</HeadlineSmall>
        <TextSmall>
          Die Respend GmbH wird vertreten durch Max Mustermann und Erika
          Mustermann.
        </TextSmall>
      </SubContainer>
      <SubContainer>
        <HeadlineSmall>Handelsregister:</HeadlineSmall>
        <TextSmall>HRB: 12 345 für die GmbH & Co. KG</TextSmall>
        <TextSmall>HRB: 67 890 für die Verwaltung GmbH</TextSmall>
        <TextSmall>Hauptsitz der Firma: Berlin, Deutschland</TextSmall>
      </SubContainer>
      <SubContainer>
        <HeadlineSmall>Inhaltlich Verantwortlicher:</HeadlineSmall>
        <TextSmall>Max Mustermann</TextSmall>
      </SubContainer>
      <br />
      <br />
      <br />
    </Container>
  );
};

export default Imprint;
