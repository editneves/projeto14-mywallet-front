import styled from "styled-components";
import React from "react";
import { AuthContext } from "../src/components/AuthContext";
import { useState } from "react";
import RoutersComponents from "./RoutersComponents";

export default function App() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [entrada, setEntrada] = useState({ valor: "", descricao: "" });
  const [saida, setSaida] = useState({ valor: "", descricao: "" });
  const [cadastro, setCadastro] = useState({
    email: "",
    name: "",
    password: "",
    confirmPpassword: "",
  });

  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");
  return (
    <AuthContext.Provider
      value={{
        form,
        setForm,
        user,
        setUser,
        cadastro,
        setCadastro,
        entrada,
        setEntrada,
        saida,
        setSaida,
        token, 
        setToken,
      }}
    >
      <Container>
        <RoutersComponents />
      </Container>

      {/* <Container>
        <RoutersComponents />
      </Container> */}
    </AuthContext.Provider>
  );
}
const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  margin: 0px;
  padding: 0px;
  background-color: #8c11be;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
`;
