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
    const [loading,setLoading]=useState(false);

async function handleSubmit(e){

    e.preventDefault();

    setError("");

    setLoading(true);


    const res = await login(
        email,
        password
    );


    setLoading(false);


    if(!res.success){

        setError(res.message);
        return;

    }


    navigate("/dashboard");

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
                disabled={loading}
                >

                {
                loading 
                ? "Logging in..."
                : "Login"
                }

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