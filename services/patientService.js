import axios from 'axios';

export const getPatients = async () => {
  const { data } = await axios.get('http://localhost:5000/patients');
  return data;
};

export const removePatient = async (id) => {
  const { data } = await axios.delete(`http://localhost:5000/patients/${id}`);
  return data;
};
