import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { useNavigate, Link } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../components/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { form, setForm, setUser } = useContext(AuthContext);

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const fazerLogin = (e) => {
    e.preventDefault();

    const requisicao = axios.post(`${BASE_URL}/auth/login`, form);

    requisicao.then((req) => {
      const user = req.data;
      setUser(user);
      window.localStorage.setItem("token", user.token);

      if (user.membership === null) {
        navigate("/subscriptions");
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
        <Text> MyWallet </Text>
        <form onSubmit={fazerLogin}>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={handleForm}
            value={form.email}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Senha"
            onChange={handleForm}
            value={form.password}
            required
          />

          <button type="submit">Entrar</button>
        </form>
        <Div>
          <Link to="/cadastro">
            <TextLink>Primeira vez? Cadastre-se!</TextLink>
          </Link>
        </Div>
      </Container>
    </>
  );
}

const Text= styled.div`
display: flex;
justify-content: center;
width: 326px; 
height: 50px;
font-family: 'Saira Stencil One';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 50px;
color: #FFFFFF;
`;

const Container = styled.div`
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
    border-radius: 8px;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0) !important;
    border-bottom: 0px;
    border: none !important;
    background-color: white !important;
  }
  button {
    background-color: #A328D6;
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
  }
`;

const TextLink = styled.label`
  margin-top: 46px;
  text-align: center;
  text-decoration-line: underline;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
`;

const Div = styled.div`
  margin-top: 20px;
  width: 299px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
