import styles from "./DrawerHeader.module.css";

export default function DrawerHeader({
    title,
    subtitle,
    onClose
}){

    return(

        <div className={styles.header}>

            <div>

                <h2>{title}</h2>

                <p>{subtitle}</p>

            </div>

            <button onClick={onClose}>
                ✕
            </button>

        </div>

    )

}