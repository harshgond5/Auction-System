import styles from "./CreateAuctionForm.module.css";

export default function StepIndicator({ currentStep }) {

  const steps = [
    "Details",
    "Assets",
    "Security",
  ];

  return (
    <div className={styles.stepper}>

      {steps.map((item, index) => {

        const number = index + 1;

        return (
          <div
            key={number}
            className={styles.step}
          >
            <div
              className={`${styles.circle}
              ${
                currentStep >= number
                  ? styles.active
                  : ""
              }`}
            >
              {number}
            </div>

            <span>{item}</span>

            {number !== steps.length && (
              <div
                className={`${styles.line}
                ${
                  currentStep > number
                    ? styles.activeLine
                    : ""
                }`}
              />
            )}
          </div>
        );

      })}
    </div>
  );
}