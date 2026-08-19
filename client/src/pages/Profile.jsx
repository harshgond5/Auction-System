import { useState } from "react";
import { useAuth } from "../context/AuthContext";

import ProfileHeader from "../components/profile/ProfileHeader/ProfileHeader";
import PersonalInfo from "../components/profile/PersonalInfo/PersonalInfo";
import AddressInfo from "../components/profile/AddressInfo/AddressInfo";
import SecurityPayments from "../components/profile/SecurityPayments/SecurityPayments";
import KycVerification from "../components/profile/KYCVerification/KYCVerification";
import ProfileModals from "../components/profile/ProfileModals/ProfileModals";
import ProfileStats from "../components/profile/ProfileStats/ProfileStats";

import styles from "../styles/Profile.module.css";

export default function Profile() {

    const [modal, setModal] = useState(null);

    const { profile, loading } = useAuth();

    if (loading) {
        return (
            <section className={styles.page}>
                <h2>Loading Profile...</h2>
            </section>
        );
    }

    if (!profile) {
        return (
            <section className={styles.page}>
                <h2>Profile not found</h2>
            </section>
        );
    }

    return (

        <section className={styles.page}>

            <div className={styles.container}>

                <ProfileHeader
                    user={profile}
                    onEdit={() => setModal("verify")}
                />

                <div className={styles.grid}>

                    <div className={styles.left}>

                        <PersonalInfo user={profile} />

                        <AddressInfo user={profile} />

                        <SecurityPayments user={profile} />

                    </div>

                    <div className={styles.right}>

                        <KycVerification user={profile} />

                        <ProfileStats user={profile} />

                    </div>

                </div>

            </div>

            <ProfileModals
                modal={modal}
                setModal={setModal}
                user={profile}
            />

        </section>

    );
}