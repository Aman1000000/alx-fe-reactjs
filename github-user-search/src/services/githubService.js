
import axios from 'axios';

const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

const fetchUsers = async (query) => {
  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
  return response.data;
};

export { fetchUserData, fetchUsers };