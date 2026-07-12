import styles from "./AuctionDrawer.module.css";

export default function AuctionDrawer({
    open,
    
    children
}) {

    return (
        <>
            {/* {open && (
                <div
                    className={styles.overlay}
                    onClick={onClose}
                />
            )} */}

            <aside
                className={`${styles.drawer} ${
                    open ? styles.open : ""
                }`}
            >
                {children}
            </aside>
        </>
    );
}