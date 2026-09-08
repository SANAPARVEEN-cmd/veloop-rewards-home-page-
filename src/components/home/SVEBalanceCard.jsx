import styles from "./SVEBalanceCard.module.css";

const SVEBalanceCard = ({
    balance = 3280,
    change = 8.4,
}) => {
    return (
        <div className={styles.card}>

            <div className={styles.top}>

                <div>
                    <span className={styles.label}>
                        AVAILABLE SVEs
                    </span>

                    <h2 className={styles.balance}>
                        {balance.toLocaleString()}
                    </h2>

                    <span className={styles.unit}>
                        SVEs
                    </span>
                </div>

                <div className={styles.icon}>
                    SVE
                </div>

            </div>

            <div className={styles.bottom}>

                <span className={styles.change}>
                    +{change}%
                </span>

                <span className={styles.period}>
                    from last week
                </span>

            </div>

        </div>
    );
};

export default SVEBalanceCard;