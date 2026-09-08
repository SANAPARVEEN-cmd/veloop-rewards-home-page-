import styles from "./VEBalanceCard.module.css";

const VEBalanceCard = ({
    balance = 12450,
    change = 12.5,
}) => {
    return (
        <div className={styles.card}>

            <div className={styles.top}>

                <div>
                    <span className={styles.label}>
                        AVAILABLE VEs
                    </span>

                    <h2 className={styles.balance}>
                        {balance.toLocaleString()}
                    </h2>

                    <span className={styles.unit}>
                        VEs
                    </span>
                </div>

                <div className={styles.icon}>
                    VE
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

export default VEBalanceCard;