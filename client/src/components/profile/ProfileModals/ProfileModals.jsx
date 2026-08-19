import { useState, useEffect } from "react";
import { useAuth } from "../../../context/AuthContext";
import Modal from "../../common/Modal/Modal";
import { updateProfile } from "../../../services/userService";

import {
    EmailAuthProvider,
    reauthenticateWithCredential,
    updatePassword,
    sendPasswordResetEmail,
} from "firebase/auth";

import { auth } from "../../../firebase/firebase";

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

}) {

    const { user, updateUser } = useAuth();

    /* -----------------------------
        PASSWORD VERIFY
    ------------------------------ */

    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const [error, setError] = useState("");

    /* -----------------------------
        OTP
    ------------------------------ */

    const [otp, setOtp] = useState("");

    const [otpSent, setOtpSent] = useState(false);

    const [otpError, setOtpError] = useState("");

    const [timer, setTimer] = useState(30);

    /* -----------------------------
        PASSWORD CHANGE
    ------------------------------ */

    const [currentPassword, setCurrentPassword] = useState("");

    const [newPassword, setNewPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");

    /* -----------------------------
        EDIT PROFILE
    ------------------------------ */

    const [tab, setTab] = useState("personal");

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({

        name: "",

        email: "",

        phone: "",

        dob: "",

        gender: "",

        occupation: "",

        bio: "",

        address: "",

        city: "",

        state: "",

        pincode: "",

        country: "India",

        upi: "",

        paymentMethod: "UPI",

    });

    useEffect(() => {

        if (!user) return;

        setFormData({

            name: user.name || "",

            email: user.email || "",

            phone: user.phone || "",

            dob: user.dob || "",

            gender: user.gender || "",

            occupation: user.occupation || "",

            bio: user.bio || "",

            address: user.address || "",

            city: user.city || "",

            state: user.state || "",

            pincode: user.pincode || "",

            country: user.country || "India",

            upi: user.upi || "",

            paymentMethod:
                user.paymentMethod || "UPI",

        });

    }, [user]);

    function handleChange(e) {

        setFormData({

            ...formData,

            [e.target.name]:
                e.target.value,

        });

    }
    async function handleSubmit() {

    if (!formData.name.trim()) {
        alert("Name is required");
        return;
    }

    try {

        setLoading(true);

        const result = await updateProfile(formData);

        if (!result.success) {
            alert(result.message);
            return;
        }

        if (updateUser) {
            updateUser(result.user);
        }

        alert("Profile updated successfully.");

        setModal(null);

    } catch (err) {

        alert(err.message);

    } finally {

        setLoading(false);

    }

}

async function verifyPassword() {

    try {

        if (!password.trim()) {

            setError("Please enter password");

            return;

        }

        const credential =
            EmailAuthProvider.credential(
                auth.currentUser.email,
                password
            );

        await reauthenticateWithCredential(
            auth.currentUser,
            credential
        );

        setPassword("");

        setError("");

        setModal("edit");

    } catch {

        setError("Incorrect password");

    }

}

function sendOTP() {

    sendPasswordResetEmail(auth, auth.currentUser.email)
        .then(() => {

            setOtp("");

            setOtpError("");

            setOtpSent(true);

            setTimer(30);

            alert(
                "Password reset email sent successfully."
            );

        })
        .catch((err) => {

            alert(err.message);

        });

}

function verifyOTP() {

    if (otp.length !== 6) {

        setOtpError("Enter valid 6 digit OTP");

        return;

    }

    setModal("edit");

}

async function changePassword() {

    try {

        if (!currentPassword) {

            alert("Current password required");

            return;

        }

        if (newPassword.length < 6) {

            alert("Password must be at least 6 characters");

            return;

        }

        if (newPassword !== confirmPassword) {

            alert("Passwords do not match");

            return;

        }

        const credential =
            EmailAuthProvider.credential(
                auth.currentUser.email,
                currentPassword
            );

        await reauthenticateWithCredential(
            auth.currentUser,
            credential
        );

        await updatePassword(
            auth.currentUser,
            newPassword
        );

        alert("Password updated successfully.");

        setCurrentPassword("");

        setNewPassword("");

        setConfirmPassword("");

    } catch (err) {

        alert(err.message);

    }

}

useEffect(() => {

    if (!otpSent || timer === 0) return;

    const interval = setInterval(() => {

        setTimer((prev) => prev - 1);

    }, 1000);

    return () => clearInterval(interval);

}, [otpSent, timer]);

if (!modal) return null;
return (

<>

{/* =========================
VERIFY
========================= */}

{

modal === "verify" && (

<Modal
open={true}
onClose={() => setModal(null)}
title="Verify Identity"
>

<div className={styles.verifyBox}>

<div className={styles.verifyIcon}>
<FaUserShield/>
</div>

<h2>Verify Your Identity</h2>

<p>

Choose a verification method before editing your profile.

</p>

<button

className={styles.methodBtn}

onClick={() => setModal("password")}

>

<FaKey/>

Verify using Password

</button>

<button

className={styles.methodBtn}

onClick={() => setModal("otp")}

>

<FaEnvelope/>

Verify using OTP

</button>

</div>

</Modal>

)

}

{/* =========================
PASSWORD VERIFY
========================= */}

{

modal === "password" && (

<Modal
open={true}
onClose={() => setModal(null)}
title="Password Verification"
>

<div className={styles.passwordBox}>

<div className={styles.lockIcon}>
<FaLock/>
</div>

<h3>Password Verification</h3>

<p>

Enter your account password.

</p>

<div className={styles.inputGroup}>

<input

type={showPassword ? "text" : "password"}

placeholder="Enter Password"

value={password}

onChange={(e)=>{

setPassword(e.target.value);

setError("");

}}

 />

<button

type="button"

onClick={()=>

setShowPassword(!showPassword)

}

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

onClick={() => setModal("verify")}

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

{/* =========================
OTP
========================= */}

{

modal==="otp" && (

<Modal
open={true}
onClose={()=>setModal(null)}
title="Email Verification"
>

<div className={styles.passwordBox}>

<div className={styles.lockIcon}>

<FaEnvelope/>

</div>

<h3>Email Verification</h3>

<p>

Reset mail will be sent to

</p>

<strong>

{user?.email}

</strong>

{

!otpSent

?

(

<button

className={styles.verify}

onClick={sendOTP}

>

Send Email

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

Resend in {timer}s

</p>

:

<button

className={styles.cancel}

onClick={sendOTP}

>

Resend

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

Continue

</button>

</div>

</>

)

}

</div>

</Modal>

)

}
{/* =========================
EDIT PROFILE
========================= */}

{

modal === "edit" && (

<Modal
open={true}
onClose={() => setModal(null)}
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

{/* ---------------- PERSONAL ---------------- */}

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
disabled
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
<option value="Male">Male</option>
<option value="Female">Female</option>
<option value="Other">Other</option>

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

{/* ---------------- ADDRESS ---------------- */}

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

{/* ---------------- SECURITY ---------------- */}

{

tab==="security" && (

<>

<label>Current Password</label>

<input
type="password"
value={currentPassword}
onChange={(e)=>setCurrentPassword(e.target.value)}
placeholder="Current Password"
/>

<label>New Password</label>

<input
type="password"
value={newPassword}
onChange={(e)=>setNewPassword(e.target.value)}
placeholder="New Password"
/>

<label>Confirm Password</label>

<input
type="password"
value={confirmPassword}
onChange={(e)=>setConfirmPassword(e.target.value)}
placeholder="Confirm Password"
/>

<button
className={styles.verify}
type="button"
onClick={changePassword}
>

Update Password

</button>

</>

)

}

{/* ---------------- PAYMENTS ---------------- */}

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

<select
name="paymentMethod"
value={formData.paymentMethod}
onChange={handleChange}
>

<option value="UPI">UPI</option>

<option value="Bank Transfer">
Bank Transfer
</option>

<option value="Credit Card">
Credit Card
</option>

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

disabled={loading}

>

{

loading

?

"Saving..."

:

"Save Changes"

}

</button>

</div>

</Modal>

)

}

</>

);

}