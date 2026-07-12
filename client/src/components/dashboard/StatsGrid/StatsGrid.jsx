import StatCard from "../StatCard/StatCard";
import styles from "./StatsGrid.module.css";

export default function StatsGrid({ stats }) {
  return (
    <section className={styles.grid}>
      {stats.map((stat) => (
        <StatCard
          key={stat.id}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
        />
      ))}
    </section>
  );
}