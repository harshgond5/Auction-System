import AuthBanner from "../components/auth/AuthBanner/AuthBanner";
import RegisterForm from "../components/auth/RegisterForm/RegisterForm";

import styles from "../styles/Login.module.css";

export default function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <AuthBanner />
      </div>

      <div className={styles.right}>
        <RegisterForm />
      </div>
    </div>
  );
}