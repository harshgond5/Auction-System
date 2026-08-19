import api from './api';

export const syncUser = async (userData = {}) => {
  const response = await api.post('/users/sync', userData);
  return response.data;
};

export const getProfile = async () => {
  const response = await api.get('/users/profile');
  return response.data;
};

export const updateProfile = async (profileData) => {
  const response = await api.put('/users/profile', profileData);
  return response.data;
};

export const getDashboardStats = async () => {
  const response = await api.get('/users/dashboard/stats');
  return response.data;
};

export const getMyAuctions = async () => {
  const response = await api.get('/users/my-auctions');
  return response.data;
};

export const getMyBids = async () => {
  const response = await api.get('/users/my-bids');
  return response.data;
};

export const getWonAuctions = async () => {
  const response = await api.get('/users/won-auctions');
  return response.data;
};

export const userService = {
  syncUser,
  getProfile,
  updateProfile,
  getDashboardStats,
  getMyAuctions,
  getMyBids,
  getWonAuctions
};

export default userService;