import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ForgotPasswordForm.module.css";

export default function ForgotPasswordForm() {

    const [email,setEmail]=useState("");

    const navigate=useNavigate();

    function handleSubmit(e){

        e.preventDefault();

        localStorage.setItem("reset-email",email);

        navigate("/verify-otp");

    }

    return(

        <div className={styles.card}>

            <h1>Forgot Password</h1>

            <p>

                Enter your email to receive an OTP.

            </p>

            <form onSubmit={handleSubmit}>

                <input

                    type="email"

                    placeholder="Email Address"

                    value={email}

                    onChange={(e)=>setEmail(e.target.value)}

                    required

                />

                <button>

                    Send OTP

                </button>

            </form>

        </div>

    );

}