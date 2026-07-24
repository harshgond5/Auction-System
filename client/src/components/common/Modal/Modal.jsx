import styles from "./Modal.module.css";

export default function Modal({
    open,
    onClose,
    title,
    children,
}) {

    if (!open) return null;

    return (

        <div
            className={styles.overlay}
            onClick={onClose}
        >

            <div
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
            >

                <div className={styles.header}>

                    <h2>{title}</h2>

                    <button
                        className={styles.close}
                        onClick={onClose}
                    >
                        ✕
                    </button>

                </div>

                <div className={styles.body}>
                    {children}
                </div>

            </div>

        </div>

    );

}