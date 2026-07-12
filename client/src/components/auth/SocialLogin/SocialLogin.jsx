import { FaGoogle, FaGithub, FaFacebookF } from "react-icons/fa";
import styles from "./SocialLogin.module.css";

export default function SocialLogin() {
  return (
    <div className={styles.social}>

      <p className={styles.title}>
        Continue with
      </p>

      <div className={styles.icons}>

        <button
          className={styles.icon}
          aria-label="Continue with Google"
        >
          <FaGoogle />
        </button>

        <button
          className={styles.icon}
          aria-label="Continue with GitHub"
        >
          <FaGithub />
        </button>

        <button
          className={styles.icon}
          aria-label="Continue with Facebook"
        >
          <FaFacebookF />
        </button>

      </div>

    </div>
  );
}