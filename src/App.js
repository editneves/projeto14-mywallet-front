import styled from 'styled-components'
// import RoutersComponents from './RoutersComponents'
import { AuthContext } from '../src/components/AuthContext'
import { useState } from 'react'

export default function App() {

  const [form, setForm] = useState({ email: '', password: '' })
  const [cadastro, setCadastro] = useState({
    email: '',
    name: '',
    cpf: '',
    password: '',
  })
  
  const [user, setUser] = useState(null)
  const [usuario, setUsuario] = useState({
    name: '',
    cpf: '',
    email: '',
    currentPassword: '',
    newPassword: '',
  })

  return (
    <AuthContext.Provider
      value={{
        form,
        setForm,
        user,
        setUser,
        cadastro,
        setCadastro,
        usuario, 
        setUsuario,
      }}
    >
      <Container>
        {/* <RoutersComponents /> */}
      </Container>
    </AuthContext.Provider>
  )
}

const Container = styled.div`
  background-color: #9567BE;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`