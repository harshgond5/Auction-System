import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaUserTag,
} from "react-icons/fa";

import styles from "./PersonalInfo.module.css";

export default function PersonalInfo({ user }) {

  if (!user) return null;

  return (

    <div className={styles.card}>

      <div className={styles.header}>
        <h2>Personal Information</h2>
        <p>Your registered account details</p>
      </div>

      <div className={styles.grid}>

        <div className={styles.item}>
          <div className={styles.icon}>
            <FaUser />
          </div>

          <div>
            <span>Full Name</span>
            <strong>{user.name || "Not Available"}</strong>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.icon}>
            <FaEnvelope />
          </div>

          <div>
            <span>Email</span>
            <strong>{user.email || "Not Available"}</strong>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.icon}>
            <FaPhone />
          </div>

          <div>
            <span>Phone</span>
            <strong>{user.phone || "Not Added"}</strong>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.icon}>
            <FaUserTag />
          </div>

          <div>
            <span>Account Type</span>
            <strong>{user.accountType}</strong>
          </div>
        </div>

      </div>

    </div>

  );

}