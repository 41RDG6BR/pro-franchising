const get = () => {
  const user = localStorage.getItem('user');
  if (!user) { return null; }
  return JSON.parse(user);
};
const set = (value) => {
  const user = JSON.stringify(value);
  return localStorage.setItem('user', user);
};
const getToken = () => {
  return localStorage.getItem('token');
};
const setToken = (value) => {
  return localStorage.setItem('token', value);
};
const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
};

export {
  get,
  set,
  getToken,
  setToken,
  logout
};
export default get;
