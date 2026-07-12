import LoginForm from "../components/auth/LoginForm/LoginForm";
import AuthBanner from "../components/auth/AuthBanner/AuthBanner";

import styles from "../styles/Login.module.css";

export default function Login() {

  const particles = Array.from({ length: 30 });

  return (
    <div className={styles.container}>

      <div className={styles.glow1}></div>
      <div className={styles.glow2}></div>
      <div className={styles.glow3}></div>

      <div className={styles.particles}>
        {particles.map((_, i) => (
          <span
            key={i}
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      <div className={styles.left}>
        <AuthBanner />
      </div>

      <div className={styles.right}>
        <LoginForm />
      </div>

    </div>
  );
}