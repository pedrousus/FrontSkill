import axios from "./axios";


export const scoreRequest = async (score, leccion) => {
    const data = {
      score: score,
      leccion: leccion,
      // otros campos de datos aquí si los hay
    };

    const response = await axios.post('/task', data);
    return response.data;
};
  
export const getTaskRequest= () =>axios.get(`/task`)


export const scoreRequestCiencias = async (score, leccion) => {
  const data = {
    score: score,
    leccion: leccion,
    // otros campos de datos aquí si los hay
  };

  const response = await axios.post('/ciencia', data);
  return response.data;
};

export const getCienciaRequest= () =>axios.get(`/ciencia`)