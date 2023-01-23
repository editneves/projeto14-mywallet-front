import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../components/AuthContext";

export default function NovaEntrada() {
  const navigate = useNavigate();
  const { entrada, setEntrada, setUser , token, setToken} = useContext(AuthContext);

  const handleForm = (e) => {
    setEntrada({
      ...entrada,
      [e.target.name]: e.target.value,
    });
  };

  const salvarEntrada = (e) => {
    e.preventDefault();

    const requisicao = axios.post(
      `${process.env.REACT_APP_API_URL}/novaEntrada`,
      { entrada },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    requisicao.then((req) => {
      const user = req.data;
      setUser(user);
      setToken(user.token);

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
        <Text> Nova Entrada </Text>
        <form onSubmit={salvarEntrada}>
          <input
            type="number"
            name="valor"
            placeholder="Valor"
            onChange={handleForm}
            value={entrada.valor}
            required
          />

          <input
            type="text"
            name="Descrição"
            placeholder="Descrição"
            onChange={handleForm}
            value={entrada.descricao}
            required
          />

          <button type="submit">Salvar Entrada</button>
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
