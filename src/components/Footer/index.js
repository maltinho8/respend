import React from "react";
import styled from "styled-components";

const Box = styled.div`
  background-color: #8ed39980;
  position: sticky;
  top: 0;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  padding: 1rem 1rem 1rem 1rem;
  /* background: red; */
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Row2 = styled.div`
  display: flex;
  grid-gap: 130px;
  justify-content: center;
  width: 100%;
  margin-left: 0rem;
  margin-top: 0rem;
`;

const HeadingTwo = styled.p`
  font-size: 15px;
  color: white;
  margin-bottom: 5px;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const RowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
  }
`;

const Footer = () => {
  return (
    <Box>
      <Container>
        <RowContainer>
          <Row2>
            <Column>
              <HeadingTwo style={{ color: "#0b3c4d" }}>
                <b>App</b>
              </HeadingTwo>
              <HeadingTwo>Hilfe</HeadingTwo>
              <HeadingTwo>Kontaktiere Uns</HeadingTwo>
              <HeadingTwo>Datenschutzbestimmungen</HeadingTwo>
              <HeadingTwo>Allgemeine Geschäftsbedingungen</HeadingTwo>
              <HeadingTwo>Impressum</HeadingTwo>
            </Column>

            <Column>
              <HeadingTwo style={{ color: "#0b3c4d" }}>
                <b>Unternehmen</b>
              </HeadingTwo>
              <HeadingTwo>Partner Portal</HeadingTwo>
              <HeadingTwo>Werde Partner</HeadingTwo>
              <HeadingTwo>Hol dir eine kooky Box</HeadingTwo>
              <HeadingTwo>Bring kooky in deine Stadt</HeadingTwo>
              <HeadingTwo>Jobs</HeadingTwo>
            </Column>
          </Row2>
        </RowContainer>
      </Container>
    </Box>
  );
};

export default Footer;
