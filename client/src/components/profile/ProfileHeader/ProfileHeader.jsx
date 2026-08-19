import styles from "./ProfileHeader.module.css";

export default function ProfileHeader({ user, onEdit }) {

    if (!user) {
        return null;
    }

    return (

        <div className={styles.card}>

            <div className={styles.left}>

                <img
                    className={styles.avatar}
                    src={user.photoURL || "/images/default-avatar.png"}
                    alt={user.name}
                />

                <div>

                    <h2>{user.name}</h2>

                    <p>{user.email}</p>

                    <div className={styles.badges}>

                        <span className={styles.role}>
                            {user.accountType}
                        </span>

                        <span className={styles.verify}>
                            Verified
                        </span>

                    </div>

                </div>

            </div>

            <button onClick={onEdit}>
                Edit Profile
            </button>

        </div>

    );

}