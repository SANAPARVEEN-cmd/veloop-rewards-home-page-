import { Info } from "lucide-react";

import styles from "./SVEBalanceCard.module.css";

// Replace this import with your actual SVE coin image path
import sveCoin from "../../assets/images/rewards/sve-coin.png";

const SVEBalanceCard = ({
    balance = 1240,
}) => {
    return (
        <div className={styles.card}>

            {/* SILVER GLOW */}
            <div className={styles.silverGlow} />

            {/* HEADER */}
            <div className={styles.header}>

                <div className={styles.titleGroup}>
                    <span className={styles.label}>
                        AVAILABLE SVEs
                    </span>

                    <div className={styles.titleRow}>
                        <span className={styles.title}>
                            Available SVEs
                        </span>

                        <Info size={17} strokeWidth={1.8} />
                    </div>
                </div>

                <button
                    className={styles.iconButton}
                    aria-label="Balance information"
                >
                    <Info size={17} strokeWidth={1.8} />
                </button>

            </div>

            {/* BALANCE */}
            <div className={styles.balanceContent}>

                <div className={styles.coinWrapper}>
                    <img
                        src={sveCoin}
                        alt="SVE coin"
                        className={styles.coin}
                    />
                </div>

                <div className={styles.balanceInfo}>
                    <h2 className={styles.balance}>
                        {balance.toLocaleString()}
                    </h2>

                    <span className={styles.unit}>
                        SVEs
                    </span>
                </div>

            </div>

            {/* FOOTER */}
            <div className={styles.footer}>
                <span className={styles.footerIcon}>◉</span>
                <span>Silver VEs</span>
            </div>

        </div>
    );
};

export default SVEBalanceCard;