import { createContext } from "react";

export const AuthContext = createContext({
  form: {},
  setForm: () => {},
  user: {},
  setUser: () => {},
  cadastro: {},
  setCadastro: () => {},
  entrada: {},
  setEntrada: () => {},
  saida: {},
  setSaida: () => {},
});
