import { profiles } from "../../../data/profileData";


import styles from "./ProfileHeader.module.css";
const profileData = profiles.seller;
export default function ProfileHeader({ onEdit }) {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <img
          src={profileData.avatar}
          alt={profileData.name}
          className={styles.avatar}
        />

        <div>
          <h2>{profileData.name}</h2>

          <p>@{profileData.username}</p>

          <div className={styles.badges}>
            <span className={styles.role}>
              {profileData.role}
            </span>

            {profileData.verified && (
              <span className={styles.verify}>
                ✔ Verified
              </span>
            )}
          </div>
        </div>
      </div>

      <button onClick={onEdit}>
        Edit Profile
      </button>
    </div>
  );
}