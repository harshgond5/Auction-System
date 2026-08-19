import api from './api';

export const getAuctions = async (params = {}) => {
  const response = await api.get('/auctions', { params });
  return response.data;
};

export const getFeaturedAuctions = async () => {
  const response = await api.get('/auctions/featured');
  return response.data;
};

export const getAuctionById = async (id) => {
  const response = await api.get(`/auctions/${id}`);
  return response.data;
};

export const createAuction = async (auctionData) => {
  const response = await api.post('/auctions', auctionData);
  return response.data;
};

export const updateAuction = async (id, auctionData) => {
  const response = await api.put(`/auctions/${id}`, auctionData);
  return response.data;
};

export const deleteAuction = async (id) => {
  const response = await api.delete(`/auctions/${id}`);
  return response.data;
};

export const auctionService = {
  getAuctions,
  getFeaturedAuctions,
  getAuctionById,
  createAuction,
  updateAuction,
  deleteAuction
};

export default auctionService;