import styles from "./SettingsForm.module.css";

export default function SettingsForm() {
  return (
    <div className={styles.card}>
      <h1>Account Settings</h1>

      <form className={styles.form}>
        <div className={styles.field}>
          <label>Full Name</label>
          <input
            type="text"
            defaultValue="Harsh Gond"
          />
        </div>

        <div className={styles.field}>
          <label>Email</label>
          <input
            type="email"
            defaultValue="harsh@example.com"
          />
        </div>

        <div className={styles.field}>
          <label>Phone</label>
          <input
            type="text"
            defaultValue="+91 9876543210"
          />
        </div>

        <div className={styles.field}>
          <label>Current Password</label>
          <input type="password" />
        </div>

        <div className={styles.field}>
          <label>New Password</label>
          <input type="password" />
        </div>

        <div className={styles.checkbox}>
          <input type="checkbox" id="email" />

          <label htmlFor="email">
            Receive Email Notifications
          </label>
        </div>

        <div className={styles.checkbox}>
          <input type="checkbox" id="sms" />

          <label htmlFor="sms">
            Receive SMS Notifications
          </label>
        </div>

        <button type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
}