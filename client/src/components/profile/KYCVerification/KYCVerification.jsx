import { useState } from "react";
import styles from "./KYCVerification.module.css";

export default function KYCVerification() {
  const [documents, setDocuments] = useState({
    aadhaar: true,
    pan: true,
    selfie: false,
  });

  const completed = Object.values(documents).filter(Boolean).length;
  const progress = Math.round((completed / 3) * 100);

  const cards = [
    {
      key: "aadhaar",
      title: "Aadhaar Card",
      status: documents.aadhaar,
      description: "Government Identity Verification",
    },
    {
      key: "pan",
      title: "PAN Card",
      status: documents.pan,
      description: "Tax Identity Verification",
    },
    {
      key: "selfie",
      title: "Selfie Verification",
      status: documents.selfie,
      description: "Face Matching Verification",
    },
  ];

  return (
    <div className={styles.card}>

      <div className={styles.header}>
        <div>
          <h2>KYC Verification</h2>
          <p>Complete verification to unlock seller features.</p>
        </div>

        <span className={styles.badge}>
          {progress}% Complete
        </span>
      </div>

      <div className={styles.progressWrapper}>
        <div
          className={styles.progressBar}
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className={styles.documentList}>
        {cards.map((doc) => (
          <div
            className={styles.documentCard}
            key={doc.key}
          >
            <div className={styles.left}>

              <div
                className={`${styles.icon} ${
                  doc.status
                    ? styles.success
                    : styles.pending
                }`}
              >
                {doc.status ? "✔" : "!"}
              </div>

              <div>
                <h4>{doc.title}</h4>
                <p>{doc.description}</p>
              </div>

            </div>

            <div className={styles.right}>

              <span
                className={
                  doc.status
                    ? styles.verified
                    : styles.notVerified
                }
              >
                {doc.status
                  ? "Verified"
                  : "Pending"}
              </span>

              {!doc.status && (
                <button>
                  Upload
                </button>
              )}

            </div>
          </div>
        ))}
      </div>

      <div className={styles.note}>
        Verification usually takes
        <strong> 24–48 hours </strong>
        after documents are uploaded.
      </div>

      <button className={styles.verifyBtn}>
        Continue Verification
      </button>

    </div>
  );
}