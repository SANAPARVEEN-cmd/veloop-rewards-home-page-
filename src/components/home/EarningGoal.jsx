import styles from "./EarningGoal.module.css";

const EarningGoal = ({
    current = 720,
    target = 1000,
}) => {
    const percentage = Math.min(
        Math.round((current / target) * 100),
        100
    );

    return (
        <div className={styles.goal}>

            <div className={styles.header}>
                <div>
                    <span className={styles.eyebrow}>
                        TODAY'S EARNING GOAL
                    </span>

                    <div className={styles.amount}>
                        <strong>{current.toLocaleString()}</strong>

                        <span>
                            / {target.toLocaleString()} VEs
                        </span>
                    </div>
                </div>

                <span className={styles.percentage}>
                    {percentage}%
                </span>
            </div>

            <div className={styles.progressTrack}>
                <div
                    className={styles.progress}
                    style={{
                        width: `${percentage}%`,
                    }}
                />
            </div>

        </div>
    );
};

export default EarningGoal;