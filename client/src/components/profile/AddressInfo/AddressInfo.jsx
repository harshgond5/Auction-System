import { useAuth } from "../../../context/AuthContext";

import {
  FaMapMarkerAlt,
  FaCity,
  FaMap,
  FaGlobeAsia,
  FaMailBulk,
} from "react-icons/fa";

import styles from "./AddressInfo.module.css";

export default function AddressInfo() {

  const { user } = useAuth();

  return (

    <div className={styles.card}>

      <div className={styles.header}>

        <div>

          <h2>Address Information</h2>

          <p>Your registered address details.</p>

        </div>

      </div>

      <div className={styles.grid}>

        <div className={styles.item}>

          <FaMapMarkerAlt className={styles.icon} />

          <div>

            <span>Street Address</span>

            <strong>{user?.address || "Not Added"}</strong>

          </div>

        </div>

        <div className={styles.item}>

          <FaCity className={styles.icon} />

          <div>

            <span>City</span>

            <strong>{user?.city || "Not Added"}</strong>

          </div>

        </div>

        <div className={styles.item}>

          <FaMap className={styles.icon} />

          <div>

            <span>State</span>

            <strong>{user?.state || "Not Added"}</strong>

          </div>

        </div>

        <div className={styles.item}>

          <FaMailBulk className={styles.icon} />

          <div>

            <span>PIN Code</span>

            <strong>{user?.pincode || "Not Added"}</strong>

          </div>

        </div>

        <div className={styles.item}>

          <FaGlobeAsia className={styles.icon} />

          <div>

            <span>Country</span>

            <strong>{user?.country || "India"}</strong>

          </div>

        </div>

      </div>

    </div>

  );

}