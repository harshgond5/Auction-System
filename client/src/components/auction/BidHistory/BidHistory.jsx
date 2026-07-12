import { useMemo, useState } from "react";
import DrawerHeader from "../DrawerHeader/DrawerHeader";
import styles from "./BidHistory.module.css";

export default function BidHistory({ close }) {
  const [filter, setFilter] = useState("latest");

  // mock live data (later replace with socket.io)
  const bids = useMemo(
    () => [
      { id: 1, user: "Aman", amount: 45500, time: "2s ago", mine: false },
      { id: 2, user: "You", amount: 45000, time: "10s ago", mine: true },
      { id: 3, user: "Riya", amount: 44500, time: "25s ago", mine: false },
      { id: 4, user: "Vikram", amount: 44000, time: "1m ago", mine: false },
      { id: 5, user: "Neha", amount: 43500, time: "2m ago", mine: false },
    ],
    []
  );

  const sortedBids = useMemo(() => {
    let data = [...bids];

    if (filter === "highest") {
      data.sort((a, b) => b.amount - a.amount);
    }

    if (filter === "latest") {
      data.sort((a, b) => b.id - a.id);
    }

    if (filter === "mine") {
      data = data.filter((b) => b.mine);
    }

    return data;
  }, [filter, bids]);

  return (
    <>
      <DrawerHeader
        title="Bid History"
        subtitle="Live auction activity feed"
        onClose={close}
      />

      {/* Filters */}
      <div className={styles.filters}>
        <button
          className={filter === "latest" ? styles.active : ""}
          onClick={() => setFilter("latest")}
        >
          Latest
        </button>

        <button
          className={filter === "highest" ? styles.active : ""}
          onClick={() => setFilter("highest")}
        >
          Highest
        </button>

        <button
          className={filter === "mine" ? styles.active : ""}
          onClick={() => setFilter("mine")}
        >
          Mine
        </button>
      </div>

      {/* Live Feed */}
      <div className={styles.list}>
        {sortedBids.map((bid) => (
          <div
            key={bid.id}
            className={`${styles.item} ${
              bid.mine ? styles.mine : ""
            }`}
          >
            <div className={styles.left}>
              <div className={styles.user}>
                {bid.user}
                {bid.mine && <span> (You)</span>}
              </div>
              <div className={styles.time}>{bid.time}</div>
            </div>

            <div className={styles.amount}>
              ₹{bid.amount.toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <button className={styles.viewAll}>
          View Full Bid History
        </button>
      </div>
    </>
  );
}