import axios from "./axios";



export const RegistroRequest= (user)=>axios.post(`/registro`, user);

export const loginRequest = (user) => axios.post(`/login`, user);

export const verificaToken= () =>axios.get(`/verificar`)