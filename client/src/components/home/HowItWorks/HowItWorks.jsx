import styles from "./HowItWorks.module.css";

const steps = [
  {
    id: 1,
    title: "Create Account",
    description: "Sign up and verify your account to start buying or selling.",
    icon: "👤",
  },
  {
    id: 2,
    title: "Place Your Bid",
    description: "Browse live auctions and bid on products you love.",
    icon: "💰",
  },
  {
    id: 3,
    title: "Win & Pay",
    description: "Securely complete payment and receive your product.",
    icon: "🏆",
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>How It Works</h2>
          <p>Start buying and selling in three simple steps.</p>
        </div>

        <div className={styles.grid}>
          {steps.map((step) => (
            <div key={step.id} className={styles.card}>
              <div className={styles.icon}>{step.icon}</div>

              <span className={styles.number}>
                Step {step.id}
              </span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}