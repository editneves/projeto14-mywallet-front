import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../src/pages/Login'
import Cadastro from '../src/pages/Cadastro'
import Home from '../src/pages/Home'
import NovaEntrada from '../src/pages/NovaEntrada'
import NovaSaida from '../src/pages/NovaSaida'

function RoutersComponents() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nova-entrada" element={<NovaEntrada />} />
        <Route path="/nova-saida" element={<NovaSaida />} />
      </Routes>
    </Router>
  )
}

export default RoutersComponents