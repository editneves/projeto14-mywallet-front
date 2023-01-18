import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../constants/urls'
import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { AuthContext } from '../components/AuthContext'

export default function Cadastro() {
  const navigate = useNavigate()
  const { cadastro, setCadastro } = useContext(AuthContext)

  const handleCadastro = (e) => {
    setCadastro({
      ...cadastro,
      [e.target.name]: e.target.value,
    })
  }

  const fazerCadastro = (e) => {
    e.preventDefault()

    const requisicao = axios.post(`${BASE_URL}/auth/sign-up`, cadastro)

    requisicao.then((req) => {
      setCadastro(req.data)
      navigate('/')
    })

    requisicao.catch((err) => {
      alert(err.response.data.message)
    })
  }

  return (
    <>
      <Container>
        <form onSubmit={fazerCadastro}>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={handleCadastro}
            value={cadastro.email}
            required
          />
          <input
            type="name"
            name="name"
            placeholder="Nome"
            onChange={handleCadastro}
            value={cadastro.name}
            required
          />

          <input
            type="cpf"
            name="cpf"
            placeholder="CPF"
            onChange={handleCadastro}
            value={cadastro.cpf}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="senha"
            onChange={handleCadastro}
            value={cadastro.password}
            required
          />

          <button type="submit">CADASTRAR</button>
        </form>

        <Div>
          <Link to="/">
            <TextLink>Já possuí uma conta? Entre</TextLink>
          </Link>
        </Div>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 299px;
  height: 420px;
  display: flex;
  flex-direction: column;
  img {
    margin-bottom: 100px;
    width: 299px;
    height: 49px;
    left: 38px;
    top: 134px;
  }
  input {
    margin-top: 16px;
    width: 299px;
    height: 52px;
    background: #ffffff;
    border-radius: 8px;
  }
  button {
    margin-top: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px 122px;
    gap: 10px;
    width: 299px;
    height: 52px;
    background: #ff4791;
    border-radius: 8px;
  }
`

const TextLink = styled.label`
  text-align: center;
  text-decoration-line: underline;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-decoration-line: underline;
  color: #ffffff;
`

const Div = styled.div`
  margin-top: 20px;
  width: 299px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`