import styled from "styled-components";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../components/AuthContext";

export default function NovaSaida() {
  const navigate = useNavigate();
  const { saida, setSaida, setUser , token} = useContext(AuthContext);

  const handleForm = (e) => {
    setSaida({
      ...saida,
      [e.target.name]: e.target.value,
    });
  };

  const salvarSaida = (e) => {
    e.preventDefault();

    const requisicao = axios.post(
      `${process.env.REACT_APP_API_URL}/saidaCreate`,
      { saida },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    requisicao.then((req) => {
      const user = req.data;
      setUser(user);

      if (user.token === null) {
        navigate("/");
      } else {
        navigate("/home");
      }
    });

    requisicao.catch((err) => {
      alert(err.response.data.message);
    });
  };

  return (
    <>
      <Container>
        <Text> Nova Saída </Text>
        <form onSubmit={salvarSaida}>
          <input
            type="number"
            name="valor"
            placeholder="Valor"
            onChange={handleForm}
            value={saida.valor}
            required
          />

          <input
            type="text"
            name="descricao"
            placeholder="Descrição"
            onChange={handleForm}
            value={saida.descricao}
            required
          />
          <button type="submit">Salvar Saída</button>
        </form>
      </Container>
    </>
  );
}

const Text = styled.div`
  width: auto;
  height: 31px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  color: #ffffff;
`;

const Container = styled.div`
  width: auto;
  height: 550px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  input {
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
    color: #000000;
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
    line-height: 23px;
    color: #ffffff;
  }
`;