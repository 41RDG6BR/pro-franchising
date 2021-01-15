import axios from 'src/utils/axios';
import { set as setUser, setToken } from 'src/utils/user';

const login = async (username, password) => {
  const response = await axios.post('/auth/login', {
    username,
    password
  }).catch((request) => {
    return request.response;
  });
  if (response.data && !response.data.error) {
    setUser(response.data);
    setToken(response.headers.authorization);
  }
  return response.data;
};
export {
  login,
};
export default login;
