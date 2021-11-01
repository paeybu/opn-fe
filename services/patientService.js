import axios from 'axios';

export const getPatients = async () => {
  const { data } = await axios.get('http://localhost:5000/patients');
  return data;
};
