import {
    ArrowUpRight,
    Headphones,
    Mail,
} from "lucide-react";

import styles from "./SupportCard.module.css";

const SupportCard = () => {
    return (
        <section className={styles.card}>
            <div className={styles.left}>
                <div className={styles.iconWrapper}>
                    <Headphones size={18} strokeWidth={1.8} />
                </div>

                <div className={styles.content}>
                    <span className={styles.eyebrow}>
                        NEED HELP?
                    </span>

                    <h2>We're here to help</h2>

                    <p>
                        Have questions about your rewards or account?
                        Our support team is ready to help.
                    </p>
                </div>
            </div>

            <div className={styles.right}>
                <div className={styles.email}>
                    <Mail size={14} />

                    <span>
                        support@velooprewards.com
                    </span>
                </div>

                <button
                    type="button"
                    className={styles.button}
                >
                    Contact Support
                    <ArrowUpRight size={14} />
                </button>
            </div>
        </section>
    );
};

export default SupportCard;