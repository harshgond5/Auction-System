import { useState } from "react";
import styles from "./PersonalInfo.module.css";

export default function PersonalInfo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    occupation: "",
    bio: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);

    alert("Profile updated successfully! (Dummy)");
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h2>Personal Information</h2>
          <p>Manage your public profile information.</p>
        </div>

        <button className={styles.saveBtn}>
          Save Changes
        </button>
      </div>

      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <div className={styles.grid}>
          <div className={styles.field}>
            <label>First Name</label>

            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Harsh"
            />
          </div>

          <div className={styles.field}>
            <label>Last Name</label>

            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Gond"
            />
          </div>

          <div className={styles.field}>
            <label>Username</label>

            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="@username"
            />
          </div>

          <div className={styles.field}>
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
            />
          </div>

          <div className={styles.field}>
            <label>Phone</label>

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          <div className={styles.field}>
            <label>Date of Birth</label>

            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
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
          </div>

          <div className={styles.field}>
            <label>Occupation</label>

            <input
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              placeholder="Software Engineer"
            />
          </div>
        </div>

        <div className={styles.field}>
          <label>Bio</label>

          <textarea
            rows="5"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Tell everyone about yourself..."
          />
        </div>

        <button
          type="submit"
          className={styles.mobileBtn}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}