import styles from "./DashboardHeader.module.css";

export default function DashboardHeader({ user }) {
  return (
    <section className={styles.header}>
      <div>
        <h1>Welcome back, {user.name} 👋</h1>
        <p>
          Here's what's happening with your auctions today.
        </p>
      </div>

      <button className={styles.button}>
        + Create Auction
      </button>
    </section>
  );
}