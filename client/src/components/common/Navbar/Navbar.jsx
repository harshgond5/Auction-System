import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext"; // adjust path if needed
import { useState, useRef, useEffect } from "react";
import styles from "./Navbar.module.css";

import {
  FaUserCircle,
  FaUser,
  FaGavel,
  FaHeart,
  FaBell,
  FaCog,
  FaSignOutAlt,
  FaChevronDown,
} from "react-icons/fa";

export default function Navbar() {
  const { firebaseUser, profile, logout, loading }=useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {

    function handleClick(e) {

        if (
            menuRef.current &&
            !menuRef.current.contains(e.target)
        ) {
            setOpen(false);
        }

    }

    document.addEventListener("mousedown", handleClick);

    return () =>
        document.removeEventListener(
            "mousedown",
            handleClick
        );

}, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>

        <Link to="/" className={styles.logo}>
          AuctionHub
        </Link>

        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/auctions">Auctions</Link>
          <Link to="/create-auction">Sell</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <div className={styles.actions}>

    {loading ? null : !firebaseUser ? (

    <>
        <Link
            to="/login"
            className={styles.login}
        >
            Login
        </Link>

        <Link
            to="/register"
            className={styles.register}
        >
            Register
        </Link>
    </>

) : (

    <div
        className={styles.profile}
        ref={menuRef}
    >

        <button
            className={styles.profileBtn}
            onClick={() => setOpen(!open)}
        >

            <img
                src={
                    profile?.photoURL ||
                    firebaseUser?.photoURL ||
                    "/images/default-avatar.png"
                }
                alt={profile?.name || "Profile"}
                className={styles.navAvatar}
            />

            <FaChevronDown />

        </button>

        {open && (

            <div className={styles.dropdown}>

                <div className={styles.userInfo}>

                    <img
                        src={
                            profile?.photoURL ||
                            firebaseUser?.photoURL ||
                            "/images/default-avatar.png"
                        }
                        alt={profile?.name || "Profile"}
                        className={styles.avatar}
                    />

                    <h4>
                        {profile?.name ||
                         firebaseUser?.displayName ||
                         "User"}
                    </h4>

                    <p>
                        {profile?.email ||
                         firebaseUser?.email}
                    </p>

                </div>

                <Link to="/profile">
                    <FaUser />
                    My Profile
                </Link>

                <Link to="/dashboard">
                    <FaGavel />
                    My Auctions
                </Link>

                <Link to="/watchlist">
                    <FaHeart />
                    Watchlist
                </Link>

                <Link to="/notifications">
                    <FaBell />
                    Notifications
                </Link>

                <button
                    onClick={async () => {

                        await logout();

                        setOpen(false);

                        navigate("/");

                    }}
                >
                    <FaSignOutAlt />
                    Logout
                </button>

            </div>

        )}

    </div>

)}

</div>

      </div>
    </header>
  );
}