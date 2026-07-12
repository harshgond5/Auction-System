import { useState } from "react";
import styles from "./CreateAuctionForm.module.css";

import StepIndicator from "./StepIndicator";
import DetailsStep from "./DetailsStep";
import AssetsStep from "./AssetsStep";
import SecurityStep from "./SecurityStep";

export default function CreateAuctionForm() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1>Create New Auction</h1>
        <p>Create a professional auction listing in just a few steps.</p>
      </div>

      <StepIndicator currentStep={step} />

      <div className={styles.card}>
        {step === 1 && <DetailsStep />}
        {step === 2 && <AssetsStep />}
        {step === 3 && <SecurityStep />}

        <div className={styles.footer}>
          {step > 1 && (
            <button
              className={styles.secondaryBtn}
              onClick={prevStep}
            >
              Back
            </button>
          )}

          <button className={styles.secondaryBtn}>
            Save Draft
          </button>

          {step < 3 ? (
            <button
              className={styles.primaryBtn}
              onClick={nextStep}
            >
              Continue
            </button>
          ) : (
            <button className={styles.primaryBtn}>
              Publish Auction
            </button>
          )}
        </div>
      </div>
    </div>
  );
}