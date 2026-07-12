import DashboardHeader from "../components/dashboard/DashboardHeader/DashboardHeader";
import StatsGrid from "../components/dashboard/StatsGrid/StatsGrid";
import RecentBids from "../components/dashboard/RecentBids/RecentBids";
import MyAuctions from "../components/dashboard/MyAuctions/MyAuctions";
import FraudAlerts from "../components/dashboard/FraudAlerts/FraudAlerts";

import {
  currentUser,
  dashboardStats,
  recentBids,
  myAuctions,
  fraudAlerts,
} from "../data/dummyData";

export default function Dashboard() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
        padding: "0 20px",
      }}
    >
    <DashboardHeader user={currentUser} />
    <StatsGrid stats={dashboardStats} />
    <RecentBids bids={recentBids} />

    <div
    style={{
        marginTop: "32px",
    }}
    >
  <MyAuctions auctions={myAuctions} />
    </div>

    <div
    style={{
    marginTop: "32px",
    }}
    >   
    <FraudAlerts alerts={fraudAlerts} />
    </div>

    </div>
  );
}