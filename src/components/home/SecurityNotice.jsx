import { CheckCircle, LockKeyhole } from "lucide-react";

import styles from "./SecurityNotice.module.css";

const SecurityNotice = () => {
    return (
        <section className={styles.card}>
            <div className={styles.left}>
                <div className={styles.iconWrapper}>
                    <LockKeyhole size={18} strokeWidth={1.8} />
                </div>

                <div className={styles.content}>
                    <h2>Your account is protected</h2>

                    <p>
                        Never share your password, OTP, or account
                        information with anyone.
                    </p>
                </div>
            </div>

            <div className={styles.status}>
                <CheckCircle size={15} strokeWidth={2} />

                <span>Secure &amp; Protected</span>
            </div>
        </section>
    );
};

export default SecurityNotice;