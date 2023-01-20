import React from "react";
import styled from "styled-components";
import Entrada from "../img/entrada.png";
import Saida from "../img/saida.png";
import Logout from "../img/logout.png";
import { Link } from "react-router-dom";

export default function Home() {
 
  return (
    <>
      <Container>
        <Div>
          <Text> Olá, Fulano </Text>
          <Link to="/">
            <img src={Logout} alt="logout" />
          </Link>
        </Div>

        <Registro>
          <p> Não há registros de entrada ou saída </p>
        </Registro>

        <Entradas>
          <Nova>
            <Link to="/nova-entrada">
              <img src={Entrada} alt="entrada" />
            </Link>

            <Link to="/nova-entrada">
              <TextLink>
                Nova <br></br> Entrada
              </TextLink>
            </Link>
          </Nova>

          <Nova>
            <Link to="/nova-saida">
              <img src={Saida} alt="saida" />
            </Link>
            <Link to="/nova-saida">
              <TextLink>
                Nova <br></br> Saída
              </TextLink>
            </Link>
          </Nova>
        </Entradas>
      </Container>
    </>
  );
}

const Div = styled.div`
  margin-top: 0px;
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
`;
const Registro = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 446px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #868686;
`;
const Nova = styled.div`
  display: flex;
  width: 155px;
  height: 114px;
  padding-left: 10px;
  background: #a328d6;
  border-radius: 5px;
  flex-direction: column;
  justify-content: space-around;
`;
const Entradas = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

const Text = styled.div`
  width: 141px;
  height: 31px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  color: #ffffff;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 90%;
  height: 100%;

  /* input {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    margin-top: 13px;
    width: 326px;
    height: 58px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    border-radius: 8px;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0) !important;
    border-bottom: 0px;
    border: none !important;
    background-color: white !important;
  }
  button {
    background-color: #a328d6;
    margin-top: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px 122px;
    width: 326px;
    height: 46px;
    border-radius: 8px;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0) !important;
    border-bottom: 0px;
    border: none !important;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 16px;
    color: #ffffff;
  } */
  img {
    width: 23px;
    height: 24px;
  }
`;

const TextLink = styled.label`
  width: 64px;
  height: 40px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  color: #ffffff;
  text-decoration: none;
`;
