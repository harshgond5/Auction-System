import {
  FaCheckCircle,
  FaTimesCircle,
  FaIdCard,
  FaEnvelope,
  FaPhone,
  FaUniversity,
  FaShieldAlt,
} from "react-icons/fa";

import styles from "./KYCVerification.module.css";

export default function KycVerification({ user }) {

  if (!user) return null;

  const checks = [
    {
      icon: <FaEnvelope />,
      label: "Email Verification",
      verified: true,
    },
    {
      icon: <FaPhone />,
      label: "Phone Verification",
      verified: !!user.phone,
    },
    {
      icon: <FaIdCard />,
      label: "Government ID",
      verified: !!user.kycVerified,
    },
    {
      icon: <FaUniversity />,
      label: "Bank Account",
      verified: !!user.bankLinked,
    },
  ];

  const completed = checks.filter(item => item.verified).length;
  const progress = (completed / checks.length) * 100;

  return (

    <div className={styles.card}>

      <div className={styles.header}>

        <div>
          <h2>Identity Verification</h2>
          <p>Complete verification to increase buyer trust.</p>
        </div>

      </div>

      <div className={styles.level}>

        <FaShieldAlt className={styles.bigIcon} />

        <div>

          <h3>

            {progress === 100
              ? "Verified Account"
              : "Verification Required"}

          </h3>

          <p>

            {completed} of {checks.length} verification steps completed.

          </p>

        </div>

      </div>

      <div className={styles.progress}>
        <div
          className={styles.fill}
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className={styles.list}>

        {checks.map((item, index) => (

          <div
            key={index}
            className={styles.item}
          >

            <div className={styles.left}>
              {item.icon}
              <span>{item.label}</span>
            </div>

            {item.verified ? (

              <span className={styles.success}>
                <FaCheckCircle />
                Verified
              </span>

            ) : (

              <span className={styles.pending}>
                <FaTimesCircle />
                Pending
              </span>

            )}

          </div>

        ))}

      </div>

    </div>

  );

}