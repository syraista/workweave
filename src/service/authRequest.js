import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const loginRequest = async (requestBody) => {
  try {
    console.log(requestBody);
    const response = await axios.post(`${API_URL}/auth/login`, requestBody);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : error.message);
  }
};

const logoutRequest = async (requestBody) => {
  try {
    const response = await axios.post(`${API_URL}/auth/logout`, requestBody);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : error.message);
  }
};

const registerRequest = async (requestBody) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, requestBody);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : error.message);
  }
};

export { loginRequest, logoutRequest, registerRequest };