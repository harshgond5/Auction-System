import { useState } from "react";
import styles from "./AddressInfo.module.css";

export default function AddressInfo() {
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(address);

    alert("Address Updated Successfully!");
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h2>Address Information</h2>
          <p>Keep your address updated for shipping and billing.</p>
        </div>

        <button
          type="submit"
          form="addressForm"
          className={styles.saveBtn}
        >
          Save Address
        </button>
      </div>

      <form
        id="addressForm"
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <div className={styles.field}>
          <label>Street Address</label>

          <input
            type="text"
            name="street"
            placeholder="123 MG Road"
            value={address.street}
            onChange={handleChange}
          />
        </div>

        <div className={styles.grid}>
          <div className={styles.field}>
            <label>City</label>

            <input
              type="text"
              name="city"
              placeholder="Bhopal"
              value={address.city}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label>State</label>

            <input
              type="text"
              name="state"
              placeholder="Madhya Pradesh"
              value={address.state}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label>Country</label>

            <input
              type="text"
              name="country"
              placeholder="India"
              value={address.country}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label>PIN Code</label>

            <input
              type="text"
              name="pincode"
              placeholder="462001"
              value={address.pincode}
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className={styles.mobileBtn}
        >
          Save Address
        </button>
      </form>
    </div>
  );
}