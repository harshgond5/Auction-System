import AuthBanner from "../components/auth/AuthBanner/AuthBanner";
import ForgotPasswordForm from "../components/auth/ForgotPasswordForm/ForgotPasswordForm";
import styles from "../styles/Login.module.css";

export default function ForgotPassword() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <AuthBanner />
      </div>

      <div className={styles.right}>
        <ForgotPasswordForm />
      </div>
    </div>
  );
}