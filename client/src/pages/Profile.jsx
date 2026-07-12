import ProfileHeader from "../components/profile/ProfileHeader/ProfileHeader";
import PersonalInfo from "../components/profile/PersonalInfo/PersonalInfo";
import AddressInfo from "../components/profile/AddressInfo/AddressInfo";
import SecurityPayments from "../components/profile/SecurityPayments/SecurityPayments";
import KycVerification from "../components/profile/KycVerification/KycVerification";
import ActivityTimeline from "../components/profile/ActivityTimeline/ActivityTimeline";

import styles from "../styles/Profile.module.css";

export default function Profile() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>

        <ProfileHeader />

        <div className={styles.grid}>

          <div className={styles.left}>
            <PersonalInfo />
            <AddressInfo />
            <SecurityPayments />
          </div>

          <div className={styles.right}>
            <KycVerification />
            <ActivityTimeline />
          </div>

        </div>

      </div>
    </section>
  );
}