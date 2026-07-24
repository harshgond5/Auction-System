import { useAuth } from "../../../context/AuthContext";

import {
  FaLock,
  FaShieldAlt,
  FaUniversity,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";

import styles from "./SecurityPayments.module.css";

export default function SecurityPayments() {

  const { user } = useAuth();

  return (

    <div className={styles.card}>

      <div className={styles.header}>

        <div>

          <h2>Security & Payments</h2>

          <p>
            Account security and payment information.
          </p>

        </div>

      </div>

      <div className={styles.grid}>

        <div className={styles.item}>

          <FaLock className={styles.icon} />

          <div>

            <span>Password</span>

            <strong>••••••••••••</strong>

          </div>

        </div>

        <div className={styles.item}>

          <FaShieldAlt className={styles.icon} />

          <div>

            <span>Two-Factor Authentication</span>

            <strong>

              {user?.twoFactor ? "Enabled" : "Disabled"}

            </strong>

          </div>

        </div>

        <div className={styles.item}>

          <FaWallet className={styles.icon} />

          <div>

            <span>UPI ID</span>

            <strong>

              {user?.upi || "Not Added"}

            </strong>

          </div>

        </div>

        <div className={styles.item}>

          <FaUniversity className={styles.icon} />

          <div>

            <span>Bank Account</span>

            <strong>

              {user?.bankLinked ? "Linked" : "Not Linked"}

            </strong>

          </div>

        </div>

        <div className={styles.item}>

          <FaCheckCircle className={styles.icon} />

          <div>

            <span>Primary Payment Method</span>

            <strong>

              {user?.paymentMethod || "UPI"}

            </strong>

          </div>

        </div>

      </div>

    </div>

  );

}