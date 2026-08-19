import api from './api';

export const placeBid = async (auctionId, amount) => {
  const response = await api.post(`/auctions/${auctionId}/bids`, {amount, 
    consentAccepted: true} );
  return response.data;
};

export const getBids = async (auctionId) => {
  const response = await api.get(`/auctions/${auctionId}/bids`);
  return response.data.data;
};

export const getLiveActivity = async () => {
  const response = await api.get('/auctions/activity/live');
  return response.data;
};

export const bidService = {
  placeBid,
  getBids,
  getLiveActivity
};

export default bidService;