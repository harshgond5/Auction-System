import styles from "./FiltersBar.module.css";

export default function FiltersBar() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>

        <input
          type="text"
          placeholder="Search auctions..."
          className={styles.search}
        />

        <select className={styles.select}>
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Mobiles</option>
          <option>Fashion</option>
          <option>Vehicles</option>
        </select>

        <select className={styles.select}>
          <option>Live Auctions</option>
          <option>Upcoming</option>
          <option>Ended</option>
        </select>

        <select className={styles.select}>
          <option>Newest</option>
          <option>Highest Price</option>
          <option>Lowest Price</option>
          <option>Ending Soon</option>
        </select>

        <button className={styles.button}>
          Reset
        </button>

      </div>
    </section>
  );
}