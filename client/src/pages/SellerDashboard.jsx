import DashboardStats from "../components/seller/DashboardStats/DashboardStats";
import RevenueChart from "../components/seller/RevenueChart/RevenueChart";
import RecentAuctions from "../components/seller/RecentAuctions/RecentAuctions";
import RecentBids from "../components/seller/RecentBids/RecentBids";
import RecentBuyers from "../components/seller/RecentBuyers/RecentBuyers";
import ActivityFeed from "../components/seller/ActivityFeed/ActivityFeed";

import styles from "../styles/SellerDashboard.module.css";

export default function SellerDashboard() {
  return (
    <div className={styles.container}>
      <h1>Seller Dashboard</h1>
      <DashboardStats />

      <div className={styles.topGrid}>
        <RevenueChart />
        <ActivityFeed />
      </div>

      <RecentAuctions />

      <div className={styles.bottomGrid}>
        <RecentBids />
        <RecentBuyers />
      </div>
    </div>
  );
}