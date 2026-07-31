import DashboardHeader from "../components/dashboard/DashboardHeader/DashboardHeader";
import QuickActions from "../components/dashboard/QuickActions/QuickActions";
// import StatsCards from "../components/dashboard/StatsCards/StatsCards";
import MyAuctions from "../components/dashboard/MyAuctions/MyAuctions";
import RecentBids from "../components/dashboard/RecentBids/RecentBids";
import Notifications from "../components/dashboard/Notifications/Notifications";
import Activity from "../components/dashboard/Activity/Activity";

export default function Dashboard() {
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
      {/* <StatsCards /> */}
      <MyAuctions />
      <RecentBids />
      <Notifications />
      <Activity />
    </div>
  );
}