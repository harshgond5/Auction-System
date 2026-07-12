import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import SocialLogin from "../SocialLogin/SocialLogin";

import styles from "./RegisterForm.module.css";

export default function RegisterForm() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        password:"",
        confirmPassword:"",
        role:"buyer",
        terms:false
    });

    const [error,setError]=useState("");

    function handleChange(e){

        const {name,value,type,checked}=e.target;

        setForm(prev=>({
            ...prev,
            [name]:type==="checkbox"?checked:value
        }));

    }

    function getStrength(password){

        if(password.length<6) return "Weak";

        if(password.length<10) return "Medium";

        return "Strong";

    }

    function handleSubmit(e){

        e.preventDefault();

        if(
            !form.firstName||
            !form.lastName||
            !form.email||
            !form.password
        ){
            setError("Please fill all required fields.");
            return;
        }

        if(form.password!==form.confirmPassword){
            setError("Passwords do not match.");
            return;
        }

        if(!form.terms){
            setError("Please accept Terms & Conditions.");
            return;
        }

        alert("Dummy Registration Successful!");

        navigate("/login");

    }

    return(

        <div className={styles.card}>

            <h1>Create Account</h1>

            <p>Join AuctionHub today.</p>

            <form onSubmit={handleSubmit}>

                <div className={styles.grid}>

                    <div>

                        <label>First Name</label>

                        <input
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        />

                    </div>

                    <div>

                        <label>Last Name</label>

                        <input
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        />

                    </div>

                </div>

                <label>Email</label>

                <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                />

                <label>Phone</label>

                <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                />

                <label>Account Type</label>

                <select
                name="role"
                value={form.role}
                onChange={handleChange}
                >

                    <option value="buyer">Buyer</option>

                    <option value="seller">Seller</option>

                </select>

                <label>Password</label>

                <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                />

                <div className={styles.strength}>

                    Strength :

                    <span className={styles[getStrength(form.password).toLowerCase()]}>

                        {getStrength(form.password)}

                    </span>

                </div>

                <label>Confirm Password</label>

                <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                />

                <label className={styles.check}>

                    <input
                    type="checkbox"
                    name="terms"
                    checked={form.terms}
                    onChange={handleChange}
                    />

                    I agree to Terms & Conditions

                </label>

                {error &&

                <div className={styles.error}>
                    {error}
                </div>

                }

                <button
                className={styles.register}
                >

                    Create Account

                </button>

            </form>

            <div className={styles.divider}>

                OR

            </div>

            <SocialLogin/>

            <p className={styles.footer}>

                Already have an account?

                <Link to="/login">

                    Login

                </Link>

            </p>

        </div>

    );

}