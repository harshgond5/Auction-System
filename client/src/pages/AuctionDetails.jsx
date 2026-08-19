import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import bidService from '../services/bidService';
import { getAuctionById } from "../services/auctionService";
import { getBids } from "../services/bidService";

import { socket } from '../socket';
import { Loader2, AlertCircle, Clock, Tag, ShieldCheck, CheckCircle2 } from 'lucide-react';

const AuctionDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { firebaseUser } = useAuth();

  const [auction, setAuction] = useState(null);
  const [bids, setBids] = useState([]);
  const [bidAmount, setBidAmount] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  async function fetchAuctionData() {
    try {
      setLoading(true);

      // Fetch auction
      const auctionRes = await getAuctionById(id);
      console.log("🔵 AUCTION API RESPONSE:", auctionRes);

      // FIX 1: Safely extract the auction data whether it's in .auction, .data, or the root object
      const actualAuctionData = auctionRes?.auction || auctionRes?.data || auctionRes;
      console.log("🔵 EXTRACTED AUCTION DATA:", actualAuctionData);
      
      setAuction(actualAuctionData);

      // Fetch bids
      const bidsRes = await getBids(id);

console.log("🟢 BIDS RESPONSE:", bidsRes);

setBids(Array.isArray(bidsRes) ? bidsRes : []);

    } catch (error) {
      console.error("Error fetching auction details:", error);
      setError("Unable to load auction.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAuctionData();

    socket.emit('joinAuction', id);

    socket.on('auctionUpdated', (data) => {
      setAuction((prev) => {
        if (!prev) return prev;
        const minIncrement = Number(prev.minimumBidIncrement) || 50;
        const nextMin = Number(data.currentBid) + minIncrement;
        
        setBidAmount(nextMin); 
        
        return {
          ...prev,
          currentBid: data.currentBid,
          totalBids: data.totalBids
        };
      });

      setBids((prevBids) => [data.bid, ...prevBids]);
    });

    return () => {
      socket.emit('leaveAuction', id);
      socket.off('auctionUpdated');
    };
  }, [id]);

  const handlePlaceBid = async (e) => {
    e.preventDefault();
    if (!firebaseUser) {
      navigate('/login', { state: { from: { pathname: `/auctions/${id}` } } });
      return;
    }

    setError(null);
    setSuccessMsg(null);
    setSubmitting(true);

    try {
        const res = await bidService.placeBid(
          id,
          Number(bidAmount)
        );

        if (res.success) {

          setSuccessMsg('Bid placed successfully!');

          // Refresh auction + bid history
          await fetchAuctionData();
        }
    } catch (err) {
      setError(err.message || 'Failed to place bid');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <Loader2 size={40} style={{ animation: 'spin 1s linear infinite', color: '#3b82f6' }} />
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (error && !auction) {
    return (
      <div style={{ maxWidth: '800px', margin: '40px auto', padding: '24px', backgroundColor: '#fef2f2', borderRadius: '12px', textAlign: 'center' }}>
        <AlertCircle size={40} style={{ color: '#ef4444', margin: '0 auto 12px' }} />
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#991b1b', marginBottom: '8px' }}>Auction Error</h2>
        <p style={{ color: '#b91c1c', marginBottom: '16px' }}>{error}</p>
        <button onClick={() => navigate('/auctions')} style={{ padding: '10px 24px', backgroundColor: '#3b82f6', color: '#fff', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
          Back to Auctions
        </button>
      </div>
    );
  }

  if (!auction) {
    return <div style={{ padding: "40px", textAlign: "center" }}>Auction not found.</div>;
  }

  const isOwner = firebaseUser && auction.sellerFirebaseUid === firebaseUser.uid;
  const isEnded = auction.status?.toLowerCase() === "ended" || new Date(auction.endTime) <= new Date();

  // FIX 2: Safely convert values to Numbers to prevent the NaN error
  const currentBid = Number(auction.currentBid) || 0;
  const startingPrice = Number(auction.startingPrice) || 0;
  const minIncrement = Number(auction.minimumBidIncrement) || 50;

  const nextMinBid = auction.totalBids === 0
    ? startingPrice
    : (currentBid > 0 ? currentBid : startingPrice) + minIncrement; 
    
  const images = auction.images?.length > 0 ? auction.images : ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=60'];

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 16px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginBottom: '40px' }}>
        
        {/* Images Column */}
        <div>
          <div style={{ width: '100%', height: '420px', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#f1f5f9', marginBottom: '16px', border: '1px solid #e2e8f0' }}>
            <img src={images[selectedImage]} alt={auction.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          {images.length > 1 && (
            <div style={{ display: 'flex', gap: '12px', overflowX: 'auto' }}>
              {images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImage(idx)}
                  style={{
                    width: '72px', height: '72px', borderRadius: '8px', overflow: 'hidden',
                    border: selectedImage === idx ? '2px solid #3b82f6' : '1px solid #cbd5e1',
                    padding: 0, cursor: 'pointer', backgroundColor: '#fff',
                  }}
                >
                  <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details & Bidding Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '600', padding: '4px 10px', borderRadius: '9999px', backgroundColor: '#e0f2fe', color: '#0369a1' }}>
                {auction.category}
              </span>
              <span style={{
                fontSize: '0.85rem', fontWeight: '600', padding: '4px 10px', borderRadius: '9999px',
                backgroundColor: isEnded ? '#f1f5f9' : '#dcfce7',
                color: isEnded ? '#475569' : '#166534',
              }}>
                {isEnded ? 'Auction Ended' : 'Live Bidding'}
              </span>
            </div>
            <h1 style={{ fontSize: '1.85rem', fontWeight: '700', color: '#0f172a', lineHeight: '1.3' }}>
              {auction.title}
            </h1>
          </div>

          {/* Pricing Box */}
          <div style={{ padding: '20px', borderRadius: '12px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', transition: 'all 0.3s ease' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '16px' }}>
              <div>
                <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '4px' }}>Current Highest Bid</p>
                <p style={{ fontSize: '1.65rem', fontWeight: '700', color: '#0f172a' }}>
                  ₹{(currentBid || startingPrice || 0).toLocaleString()}
                </p>
              </div>
              <div>
                <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '4px' }}>Starting Price</p>
                <p style={{ fontSize: '1.25rem', fontWeight: '600', color: '#475569' }}>
                  ₹{startingPrice.toLocaleString()}
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.9rem', color: '#475569', borderTop: '1px solid #e2e8f0', paddingTop: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={16} />
                <span>Ends: {new Date(auction.endTime).toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Tag size={16} />
                <span>Min Increment: ₹{minIncrement}</span>
              </div>
            </div>
          </div>

          {/* Winner Banner if Ended */}
          {isEnded && (
            <div style={{ padding: '16px', borderRadius: '8px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', color: '#166534' }}>
              <p style={{ fontWeight: '700', fontSize: '1rem', marginBottom: '4px' }}>🎉 Auction Closed</p>
              <p style={{ fontSize: '0.9rem' }}>
                {auction.winner ? `Winning Bidder: ${auction.winner.name || 'Bidder'} for ₹${currentBid.toLocaleString()}` : 'Ended with no bids placed.'}
              </p>
            </div>
          )}

          {/* Bidding Form */}
          {!isEnded && (
            <form onSubmit={handlePlaceBid} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {isOwner ? (
                <div style={{ padding: '12px', backgroundColor: '#fffbeb', borderRadius: '8px', color: '#b45309', fontSize: '0.9rem' }}>
                  You created this auction. Sellers are not permitted to bid on their own listings.
                </div>
              ) : (
                <>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ position: 'relative', flex: 1 }}>
                      <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', fontWeight: '600', color: '#64748b' }}>₹</span>
                      <input
                        type="number"
                        min={nextMinBid}
                        step={minIncrement}
                        value={bidAmount}
                        onChange={(e) => setBidAmount(e.target.value)}
                        required
                        style={{ width: '100%', padding: '12px 16px 12px 32px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1.1rem', fontWeight: '600' }}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      style={{
                        padding: '12px 28px', backgroundColor: '#3b82f6', color: '#fff',
                        borderRadius: '8px', border: 'none', fontWeight: '700', fontSize: '1rem',
                        cursor: submitting ? 'not-allowed' : 'pointer', opacity: submitting ? 0.7 : 1,
                      }}
                    >
                      {submitting ? 'Placing Bid...' : 'Place Bid'}
                    </button>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#64748b' }}>
                    Next minimum bid: <strong>₹{nextMinBid.toLocaleString()}</strong>
                  </p>
                </>
              )}
            </form>
          )}

          {/* Notifications */}
          {error && (
            <div style={{ padding: '12px 16px', backgroundColor: '#fef2f2', borderRadius: '8px', color: '#b91c1c', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
              <AlertCircle size={18} /><span>{error}</span>
            </div>
          )}
          {successMsg && (
            <div style={{ padding: '12px 16px', backgroundColor: '#f0fdf4', borderRadius: '8px', color: '#15803d', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
              <CheckCircle2 size={18} /><span>{successMsg}</span>
            </div>
          )}

          {/* Seller Details Card */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px', borderRadius: '8px', border: '1px solid #e2e8f0', marginTop: '8px' }}>
            <img
              src={auction.seller?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(auction.seller?.name || 'Seller')}&background=64748b&color=fff`}
              alt={auction.seller?.name || 'Seller'}
              style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
            />
            <div>
              <p style={{ fontWeight: '600', color: '#0f172a', fontSize: '0.95rem' }}>Listed by {auction.seller?.name || 'Seller'}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: '#64748b' }}>
                <ShieldCheck size={15} style={{ color: '#16a34a' }} />
                <span>Verified Seller • Rating: {auction.seller?.rating || '5.0'} / 5.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tabs: Description & Bid History */}
      <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '32px' }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: '700', color: '#0f172a', marginBottom: '16px' }}>Item Description</h2>
        <p style={{ color: '#334155', lineHeight: '1.7', fontSize: '1rem', whiteSpace: 'pre-line', marginBottom: '32px' }}>
          {auction.description}
        </p>

        <h2 style={{ fontSize: '1.35rem', fontWeight: '700', color: '#0f172a', marginBottom: '16px' }}>
          Bid History ({bids.length})
        </h2>
        
        {bids.length === 0 ? (
          <p style={{ color: '#64748b', fontSize: '0.95rem' }}>No bids have been placed on this item yet. Be the first to bid!</p>
        ) : (
          <div style={{ overflowX: 'auto', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr
                  style={{
                    backgroundColor: "#f8fafc",
                    borderBottom: "1px solid #e2e8f0",
                  }}
                >
                  <th style={{ padding: "12px 16px" }}>
                    Bidder
                  </th>

                  <th style={{ padding: "12px 16px" }}>
                    Amount
                  </th>

                  <th style={{ padding: "12px 16px" }}>
                    Time
                  </th>
                </tr>
              </thead>
              <tbody>
              {bids.map((b) => (
                <tr
                  key={b._id}
                  style={{
                    borderBottom: "1px solid #f1f5f9",
                  }}
                >
                  {/* BIDDER */}
                  <td
                    style={{
                      padding: "14px 16px",
                      fontWeight: "600",
                      color: "#1e293b",
                    }}
                  >
                    {b.bidder?.name || "Unknown Bidder"}
                  </td>

                  {/* AMOUNT */}
                  <td
                    style={{
                      padding: "14px 16px",
                      fontWeight: "700",
                      color: "#0f172a",
                    }}
                  >
                    ₹{Number(b.amount).toLocaleString("en-IN")}
                  </td>

                  {/* TIME */}
                  <td
                    style={{
                      padding: "14px 16px",
                      color: "#64748b",
                    }}
                  >
                    {getRelativeTime(b.createdAt)}
                  </td>
                </tr>
              ))}
            </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

const getRelativeTime = (date) => {
  if (!date) return "";

  const now = new Date();
  const created = new Date(date);

  const diffSeconds = Math.floor(
    (now - created) / 1000
  );

  if (diffSeconds < 10) {
    return "Just now";
  }

  if (diffSeconds < 60) {
    return `${diffSeconds} sec ago`;
  }

  const diffMinutes = Math.floor(diffSeconds / 60);

  if (diffMinutes < 60) {
    return `${diffMinutes} min ago`;
  }

  const diffHours = Math.floor(diffMinutes / 60);

  if (diffHours < 24) {
    return `${diffHours} hr ago`;
  }

  const diffDays = Math.floor(diffHours / 24);

  if (diffDays < 7) {
    return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
  }

  return created.toLocaleDateString("en-IN");
};

export default AuctionDetails;