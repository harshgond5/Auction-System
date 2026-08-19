import { useAuth } from "../../../context/AuthContext";
import styles from "./DashboardHeader.module.css";

export default function DashboardHeader() {
  const { profile, firebaseUser } = useAuth();

  return (
    <div className={styles.header}>
      <div>
        <h1>Welcome back, {profile?.name || firebaseUser?.displayName || "there"}</h1>
        <p>Manage your auctions, bids and account.</p>
      </div>
    </div>
  );
}