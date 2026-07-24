import { useAuth } from "../../../context/AuthContext";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaVenusMars,
  FaBriefcase,
  FaUserTag,
} from "react-icons/fa";

import styles from "./PersonalInfo.module.css";

export default function PersonalInfo() {
  const { user } = useAuth();

  return (
    <div className={styles.card}>

      <div className={styles.header}>
        <div>
          <h2>Personal Information</h2>
          <p>Your basic account details.</p>
        </div>
      </div>

      <div className={styles.grid}>

        <div className={styles.item}>
          <FaUser className={styles.icon} />
          <div>
            <span>Full Name</span>
            <strong>{user?.name || "Not Added"}</strong>
          </div>
        </div>

        <div className={styles.item}>
          <FaUserTag className={styles.icon} />
          <div>
            <span>Username</span>
            <strong>@{user?.username || "auctionuser"}</strong>
          </div>
        </div>

        <div className={styles.item}>
          <FaEnvelope className={styles.icon} />
          <div>
            <span>Email</span>
            <strong>{user?.email || "Not Added"}</strong>
          </div>
        </div>

        <div className={styles.item}>
          <FaPhone className={styles.icon} />
          <div>
            <span>Phone</span>
            <strong>{user?.phone || "Not Added"}</strong>
          </div>
        </div>

        <div className={styles.item}>
          <FaCalendarAlt className={styles.icon} />
          <div>
            <span>Date of Birth</span>
            <strong>{user?.dob || "Not Added"}</strong>
          </div>
        </div>

        <div className={styles.item}>
          <FaVenusMars className={styles.icon} />
          <div>
            <span>Gender</span>
            <strong>{user?.gender || "Not Added"}</strong>
          </div>
        </div>

        <div className={styles.item}>
          <FaBriefcase className={styles.icon} />
          <div>
            <span>Occupation</span>
            <strong>{user?.occupation || "Not Added"}</strong>
          </div>
        </div>

      </div>

      <div className={styles.bio}>

        <h3>Bio</h3>

        <p>

          {user?.bio ||
            "No bio has been added yet."}

        </p>

      </div>

    </div>
  );
}