import axios from "axios";

const API_URL = "http://localhost:8000"; // Altere conforme necessário

export async function login(email: string, password: string) {
  const response = await axios.post(`${API_URL}/login`, {
    email,
    password,
  });

  return response.data; // { access_token: string }
}
