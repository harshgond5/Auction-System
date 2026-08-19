import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";

import DashboardHeader from "../components/dashboard/DashboardHeader/DashboardHeader";
import QuickActions from "../components/dashboard/QuickActions/QuickActions";
import StatCards from "../components/dashboard/StatCards/StatCards";
import MyAuctions from "../components/dashboard/MyAuctions/MyAuctions";
import RecentBids from "../components/dashboard/RecentBids/RecentBids";
import Notifications from "../components/dashboard/Notifications/Notifications";
import Activity from "../components/dashboard/Activity/Activity";

import userService from "../services/userService";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { profile } = useAuth();
  const location = useLocation();
  const [auctions, setAuctions] = useState([]);
  const [bids, setBids] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = useCallback(async () => {
    setLoading(true);
    
    try {
      // 1. Fetch Auctions independently
      try {
        const auctionData = await userService.getMyAuctions();
        setAuctions(auctionData.data || []);
      } catch (auctionErr) {
        console.error("Failed to load auctions:", auctionErr);
        setAuctions([]);
      }

      // 2. Fetch Bids independently (This will silently fail until we build the API)
      try {
        const bidData = await userService.getMyBids();
        console.log("BIDS API RESPONSE:", bidData); // <-- ADD THIS LINE
        setBids(bidData.data || []);
      } catch (bidErr) {
        console.warn("My Bids API not ready yet - skipping");
        setBids([]);
      }

    } catch (err) {
      console.error("Dashboard Load Error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  // ✅ THE FIX: Wait for the Firebase profile before fetching data!
  useEffect(() => {
    if (profile) {
      loadData();
    }
  }, [loadData, profile, location.pathname]);

  // ✅ Fixed lowercase statuses to match your backend schema
  const activeListings = auctions.filter((a) => a.status === "LIVE" || a.status === "SCHEDULED").length;

  const activeBidsCount = new Set(
    bids
      .filter((b) => b.auction && (b.auction.status === "LIVE"))
      .map((b) => b.auction._id)
  ).size;

  const wonAuctions = bids.filter(
    (b) => b.auction && b.auction.status === "ENDED" && b.auction.winner === profile?._id
  ).length;

  const stats = [
    { title: "Active Listings", value: activeListings },
    { title: "Active Bids", value: activeBidsCount },
    { title: "Won Auctions", value: wonAuctions },
  ];

  return (
    <div
      style={{
        maxWidth: "1400px",
        margin: "40px auto",
        padding: "0 20px",
      }}
    >
      <DashboardHeader />
      <QuickActions />
      {!loading && <StatCards stats={stats} />}
      <MyAuctions auctions={auctions} loading={loading} />
      <RecentBids bids={bids} loading={loading} />
      <Notifications />
      <Activity />
    </div>
  );
}