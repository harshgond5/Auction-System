import { useNavigate } from "react-router-dom";
import { useState } from "react";

import styles from "../ForgotPasswordForm/ForgotPasswordForm.module.css";

export default function OTPForm() {

    const navigate = useNavigate();

    const [otp, setOtp] = useState("");

    function handleSubmit(e) {

        e.preventDefault();

        if (otp === "123456") {
            navigate("/reset-password");
        } else {
            alert("Invalid OTP");
        }
    }

    return (

        <div className={styles.card}>

            <h1>OTP Verification</h1>

            <p>
                Enter the 6-digit verification code sent to your email.
            </p>

            <form onSubmit={handleSubmit}>

                <input
                    className={styles.otpInput}
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    placeholder="● ● ● ● ● ●"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                />

                <button type="submit">
                    Verify OTP
                </button>

            </form>

            <small className={styles.demo}>
                Demo OTP: <span>123456</span>
            </small>

        </div>

    );
}