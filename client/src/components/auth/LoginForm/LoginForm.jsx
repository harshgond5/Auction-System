import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { FaEnvelope, FaLock } from "react-icons/fa";
import SocialLogin from "../SocialLogin/SocialLogin";

import styles from "./LoginForm.module.css";

export default function LoginForm() {

    const navigate = useNavigate();

    const { login } = useAuth();
    const location = useLocation();
    const [email,setEmail]=useState("");

    const [password,setPassword]=useState("");

    const [show,setShow]=useState(false);

    const [error,setError]=useState("");

function handleSubmit(e) {

    e.preventDefault();

    setError("");

    const res = login(email, password);

    if (!res.success) {

        setError(res.message);

        return;

    }

    // If user was redirected from another page
    const redirectTo = location.state?.from;

    if (redirectTo) {

        navigate(redirectTo, { replace: true });

        return;

    }

    // Otherwise redirect based on role
    switch (res.role) {

        case "buyer":
            navigate("/dashboard");
            break;

        case "seller":
            navigate("/seller-dashboard");
            break;

        case "admin":
            navigate("/admin");
            break;

        default:
            navigate("/");
    }
}

    return(

        <div className={styles.card}>

            <h1>Welcome Back</h1>

            <p>Login to continue</p>

            <form onSubmit={handleSubmit}>

                <label>Email</label>

                <input
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />

                <label>Password</label>

                <div className={styles.password}>

                    <input
                    type={show?"text":"password"}
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    palceholder = "Enter Your Password"
                    />

                    <button
                    type="button"
                    className={styles.eye}
                    onClick={()=>setShow(!show)}
                    >
                        {show?"⌣":"👁"}
                    </button>

                </div>

                {error &&

                <div className={styles.error}>
                    {error}
                </div>

                }

                <div className={styles.options}>

                    <label>

                        <input type="checkbox"/>

                        Remember me

                    </label>

                    <Link to="/forgot-password">

                        Forgot Password?

                    </Link>

                </div>

                <button
                className={styles.login}
                >

                    Login

                </button>

            </form>

            <div className={styles.divider}>
                <span>OR</span>
            </div>

            <SocialLogin/>

            <p className={styles.footer}>

                Don't have an account?

                <Link to="/register">

                    Register

                </Link>

            </p>

        </div>

    );

}