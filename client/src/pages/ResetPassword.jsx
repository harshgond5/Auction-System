import AuthBanner from "../components/auth/AuthBanner/AuthBanner";
import ResetPasswordForm from "../components/auth/ResetPasswordForm/ResetPasswordForm";
import styles from "../styles/Login.module.css";

export default function ResetPassword(){

    return(

        <div className={styles.container}>

            <div className={styles.left}>

                <AuthBanner/>

            </div>

            <div className={styles.right}>

                <ResetPasswordForm/>

            </div>

        </div>

    );

}