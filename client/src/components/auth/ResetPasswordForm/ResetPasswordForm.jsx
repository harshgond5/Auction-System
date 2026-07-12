import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import styles from "../ForgotPasswordForm/ForgotPasswordForm.module.css";

export default function ResetPasswordForm() {

    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    function handleSubmit(e) {

        e.preventDefault();

        if (password !== confirm) {
            alert("Passwords don't match");
            return;
        }

        alert("Password Changed Successfully");

        navigate("/login");
    }

    return (

        <div className={styles.card}>

            <h1>Reset Password</h1>

            <p>Create a strong new password for your account.</p>

            <form onSubmit={handleSubmit}>

                <label>New Password</label>

                <div className={styles.password}>

                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter new password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />

                    <button
                        type="button"
                        className={styles.eye}
                        onClick={()=>setShowPassword(!showPassword)}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>

                </div>

                <label>Confirm Password</label>

                <div className={styles.password}>

                    <input
                        type={showConfirm ? "text" : "password"}
                        placeholder="Confirm password"
                        value={confirm}
                        onChange={(e)=>setConfirm(e.target.value)}
                    />

                    <button
                        type="button"
                        className={styles.eye}
                        onClick={()=>setShowConfirm(!showConfirm)}
                    >
                        {showConfirm ? <FaEyeSlash /> : <FaEye />}
                    </button>

                </div>

                <button type="submit">
                    Reset Password
                </button>

            </form>

        </div>

    );

}