import styled from 'styled-components'
import axios from 'axios'
import Logo from '../img/logo.png'
import { BASE_URL } from '../constants/urls'
import { useNavigate, Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { AuthContext } from '../components/AuthContext'
import Container from '../components/Container'

const Login = () => {
  const navigate = useNavigate()
  const { form, setForm, setUser } = useContext(AuthContext)

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const fazerLogin = (e) => {
    e.preventDefault()

    const requisicao = axios.post(`${BASE_URL}/auth/login`, form)

    requisicao.then((req) => {
      const user = req.data
      setUser(user)
      window.localStorage.setItem('token', user.token)

      if (user.membership === null) {
        navigate('/subscriptions')
      } else {
        navigate('/home')
      }
    })

    requisicao.catch((err) => {
      alert(err.response.data.message)
    })
  }

  return (
    <>
      <Container>
        <img src={Logo} alt="Logo" />

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
            placeholder="senha"
            onChange={handleForm}
            value={form.password}
            required
          />

          <button type="submit">ENTRAR</button>
        </form>

        <Div>
          <Link to="/sign-up">
            <TextLink>Não possuí uma conta? Cadastre-se</TextLink>
          </Link>
        </Div>
      </Container>
    </>
  )
}

const TextLink = styled.label`
  margin-top: 20px;
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

export default Login