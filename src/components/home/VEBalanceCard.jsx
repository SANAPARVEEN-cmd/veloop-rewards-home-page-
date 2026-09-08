import {
    RotateCw,
    Info,
} from "lucide-react";

import styles from "./VEBalanceCard.module.css";

import veCoin from "../../assets/images/rewards/ve-coin.png";

const VEBalanceCard = ({
    balance = 3850,
}) => {
    return (
        <div className={styles.card}>

            {/* TOP HEADER */}
            <div className={styles.header}>

                <div className={styles.titleGroup}>
                    <span className={styles.label}>
                        AVAILABLE VEs
                    </span>

                    <div className={styles.titleRow}>
                        <span className={styles.title}>
                            Available VEs
                        </span>

                        <Info size={17} strokeWidth={1.8} />
                    </div>
                </div>

                <div className={styles.actions}>
                    <button
                        className={styles.iconButton}
                        aria-label="Refresh balance"
                    >
                        <RotateCw size={17} strokeWidth={1.8} />
                    </button>

                    <button
                        className={styles.iconButton}
                        aria-label="Balance information"
                    >
                        <Info size={17} strokeWidth={1.8} />
                    </button>
                </div>

            </div>

            {/* BALANCE CONTENT */}
            <div className={styles.balanceContent}>

                <div className={styles.coinWrapper}>
                    <img
                        src={veCoin}
                        alt="VE coin"
                        className={styles.coin}
                    />
                </div>

                <div className={styles.balanceInfo}>
                    <h2 className={styles.balance}>
                        {balance.toLocaleString()}
                    </h2>

                    <span className={styles.unit}>
                        VEs
                    </span>
                </div>

            </div>

            {/* FOOTER */}
            <div className={styles.footer}>
                <span className={styles.footerIcon}>◉</span>
                <span>VELOOP Earn Tokens</span>
            </div>

        </div>
    );
};

export default VEBalanceCard;