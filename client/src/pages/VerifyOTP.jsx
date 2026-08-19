import AuthBanner from "../components/auth/AuthBanner/AuthBanner";
import OTPForm from "../components/auth/OTPForm/OTPForm";
import styles from "../styles/Login.module.css";

export default function VerifyOTP(){

    return(

        <div className={styles.container}>

            <div className={styles.left}>

                <AuthBanner/>

            </div>

            <div className={styles.right}>

                <OTPForm/>

            </div>

        </div>

    );

}