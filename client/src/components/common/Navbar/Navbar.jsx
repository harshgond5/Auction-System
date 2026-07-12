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
  const { user, logout}=useAuth();
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

    {!user ? (

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
        src="https://i.pravatar.cc/150?img=12"
        alt={user.name}
        className={styles.navAvatar}
    />  

                <FaChevronDown />

            </button>

            {open && (

                <div className={styles.dropdown}>

                    <div className={styles.userInfo}>
                    <img  
                    src="https://i.pravatar.cc/150?img=12"
                    alt={user.name}
                    className={styles.avatar}
                    />
                        <h4>{user.name}</h4>

                        <p>{user.email}</p>

                    </div>

                    <Link to="/profile">
                        <FaUser />
                        My Profile
                    </Link>

                    <Link to="/my-auctions">
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

                    <Link to="/settings">
                        <FaCog />
                        Settings
                    </Link>

                    <button
                        onClick={() => {

                            logout();

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