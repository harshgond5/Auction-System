import { useState, useEffect } from "react";
import { useAuth } from "../../../context/AuthContext";
import Modal from "../../common/Modal/Modal";

import {
  FaUserShield,
  FaKey,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaLock,
} from "react-icons/fa";

import styles from "./ProfileModals.module.css";

export default function ProfileModals({

    modal,

    setModal,

    setVerified,

}) {

    const { user, updateUser } = useAuth();

    /* -----------------------------
       Password
    ----------------------------- */

    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const [error, setError] = useState("");

    /* -----------------------------
       OTP
    ----------------------------- */

    const [otp, setOtp] = useState("");

    const [otpError, setOtpError] = useState("");

    const [otpSent, setOtpSent] = useState(false);

    const [timer, setTimer] = useState(30);

    /* -----------------------------
       Edit Profile
    ----------------------------- */

    const [tab, setTab] = useState("personal");

    const [formData, setFormData] = useState({

        name: user?.name || "",

        email: user?.email || "",

        phone: user?.phone || "",

        dob: user?.dob || "",

        gender: user?.gender || "",

        occupation: user?.occupation || "",

        bio: user?.bio || "",

        address: user?.address || "",

        city: user?.city || "",

        state: user?.state || "",

        pincode: user?.pincode || "",

        country: user?.country || "India",

        upi: user?.upi || "",

    });

    function handleChange(e){

        setFormData({

            ...formData,

            [e.target.name]: e.target.value,

        });

    }

    function handleSubmit() {

    if (!formData.name.trim()) {

        alert("Name is required.");

        return;

    }

    if (!formData.email.trim()) {

        alert("Email is required.");

        return;

    }

    updateUser(formData);

    alert("Profile Updated Successfully!");

    setModal(null);

    }

    function verifyPassword(){

        if(password.trim()===""){

            setError("Please enter password.");

            return;

        }

        if(password!==user.password){

            setError("Incorrect password.");

            return;

        }

        setPassword("");

        setError("");

        setModal("edit");

    }

    function sendOTP(){

        setOtp("");

        setOtpError("");

        setOtpSent(true);

        setTimer(30);

        alert("Dummy OTP : 123456");

    }

    function verifyOTP(){

        if(otp!=="123456"){

            setOtpError("Invalid OTP");

            return;

        }

        setModal("edit");

    }

    useEffect(()=>{

        if(!otpSent || timer===0) return;

        const interval=setInterval(()=>{

            setTimer(prev=>prev-1);

        },1000);

        return ()=>clearInterval(interval);

    },[otpSent,timer]);

    if(!modal) return null;

    return(

        <>

        {/* ===========================
            VERIFY MODAL
        =========================== */}

        {

        modal==="verify" && (

        <Modal

        open={true}

        onClose={()=>setModal(null)}

        title="Verify Identity"

        >

        <div className={styles.verifyBox}>

        <div className={styles.verifyIcon}>

        <FaUserShield/>

        </div>

        <h2>

        Verify Your Identity

        </h2>

        <p>

        Choose how you would like to verify yourself before editing your profile.

        </p>

        <button

        className={styles.methodBtn}

        onClick={()=>setModal("password")}

        >

        <FaKey/>

        Verify using Password

        </button>

        <button

        className={styles.methodBtn}

        onClick={()=>setModal("otp")}

        >

        <FaEnvelope/>

        Verify using OTP

        </button>

        </div>

        </Modal>

        )

        }

        {

modal==="password" && (

<Modal
open={true}
onClose={()=>setModal(null)}
title="Password Verification"
>

<div className={styles.passwordBox}>

<div className={styles.lockIcon}>
<FaLock/>
</div>

<h3>Password Verification</h3>

<p>

Enter your account password to continue.

</p>

<div className={styles.inputGroup}>

<input

type={showPassword ? "text":"password"}

placeholder="Enter Password"

value={password}

onChange={(e)=>{

setPassword(e.target.value);

setError("");

}}

 />

<button

type="button"

onClick={()=>setShowPassword(!showPassword)}

>

{

showPassword

?

<FaEyeSlash/>

:

<FaEye/>

}

</button>

</div>

{

error &&

<div className={styles.error}>

{error}

</div>

}

<div className={styles.actions}>

<button

className={styles.cancel}

onClick={()=>setModal("verify")}

>

Back

</button>

<button

className={styles.verify}

onClick={verifyPassword}

>

Verify

</button>

</div>

</div>

</Modal>

)
}

{
modal==="otp" && (

<Modal
open={true}
onClose={()=>setModal(null)}
title="OTP Verification"
>

<div className={styles.passwordBox}>

<div className={styles.lockIcon}>

<FaEnvelope/>

</div>

<h3>Email Verification</h3>

<p>

OTP will be sent to

</p>

<strong>

{user.email}

</strong>

{

!otpSent

?

(

<button

className={styles.verify}

onClick={sendOTP}

>

Send OTP

</button>

)

:

(

<>

<input

className={styles.otpInput}

placeholder="Enter OTP"

value={otp}

maxLength={6}

onChange={(e)=>{

setOtp(e.target.value);

setOtpError("");

}}

 />

{

otpError &&

<div className={styles.error}>

{otpError}

</div>

}

{

timer>0

?

<p className={styles.timer}>

Resend OTP in {timer}s

</p>

:

<button

className={styles.cancel}

onClick={sendOTP}

>

Resend OTP

</button>

}

<div className={styles.actions}>

<button

className={styles.cancel}

onClick={()=>setModal("verify")}

>

Back

</button>

<button

className={styles.verify}

onClick={verifyOTP}

>

Verify

</button>

</div>

</>

)

}

</div>

</Modal>

)
}

{
modal==="edit" && (

<Modal
open={true}
onClose={()=>setModal(null)}
title="Edit Profile"
>

<div className={styles.tabs}>

<button
className={tab==="personal" ? styles.active : ""}
onClick={()=>setTab("personal")}
>

Personal

</button>

<button
className={tab==="address" ? styles.active : ""}
onClick={()=>setTab("address")}
>

Address

</button>

<button
className={tab==="security" ? styles.active : ""}
onClick={()=>setTab("security")}
>

Security

</button>

<button
className={tab==="payments" ? styles.active : ""}
onClick={()=>setTab("payments")}
>

Payments

</button>

</div>

<div className={styles.form}>

{/* PERSONAL */}

{
tab==="personal" && (

<>

<label>Full Name</label>

<input
name="name"
value={formData.name}
onChange={handleChange}
/>

<label>Email</label>

<input
name="email"
value={formData.email}
onChange={handleChange}
/>

<label>Phone</label>

<input
name="phone"
value={formData.phone}
onChange={handleChange}
/>

<label>Date of Birth</label>

<input
type="date"
name="dob"
value={formData.dob}
onChange={handleChange}
/>

<label>Gender</label>

<select
name="gender"
value={formData.gender}
onChange={handleChange}
>

<option value="">Select</option>
<option>Male</option>
<option>Female</option>
<option>Other</option>

</select>

<label>Occupation</label>

<input
name="occupation"
value={formData.occupation}
onChange={handleChange}
/>

<label>Bio</label>

<textarea
rows="4"
name="bio"
value={formData.bio}
onChange={handleChange}
/>

</>

)
}

{/* ADDRESS */}

{
tab==="address" && (

<>

<label>Street Address</label>

<input
name="address"
value={formData.address}
onChange={handleChange}
/>

<label>City</label>

<input
name="city"
value={formData.city}
onChange={handleChange}
/>

<label>State</label>

<input
name="state"
value={formData.state}
onChange={handleChange}
/>

<label>PIN Code</label>

<input
name="pincode"
value={formData.pincode}
onChange={handleChange}
/>

<label>Country</label>

<input
name="country"
value={formData.country}
onChange={handleChange}
/>

</>

)
}

{/* SECURITY */}

{
tab==="security" && (

<>

<label>Current Password</label>

<input
type="password"
placeholder="Current Password"
/>

<label>New Password</label>

<input
type="password"
placeholder="New Password"
/>

<label>Confirm Password</label>

<input
type="password"
placeholder="Confirm Password"
/>

</>

)
}

{/* PAYMENTS */}

{
tab==="payments" && (

<>

<label>UPI ID</label>

<input
name="upi"
value={formData.upi}
onChange={handleChange}
/>

<label>Preferred Payment Method</label>

<select>

<option>UPI</option>

<option>Bank Transfer</option>

<option>Credit Card</option>

</select>

</>

)
}

</div>

<div className={styles.actions}>

<button

className={styles.cancel}

onClick={()=>setModal(null)}

>

Cancel

</button>

<button

className={styles.verify}

onClick={handleSubmit}
>

Save Changes

</button>

</div>

</Modal>

)
}

        </>

    );

}