import streakFire from "../../assets/images/dashboard/streak-fire.png";
import styles from "./DayStreak.module.css";

const DayStreak = ({ streak = 7 }) => {
    return (
        <div className={styles.streak}>

            <div className={styles.iconWrapper}>
                <img
                    src={streakFire}
                    alt="Day streak"
                    className={styles.fireIcon}
                />
            </div>

            <div className={styles.content}>
                <span className={styles.value}>
                    {streak}
                </span>

                <span className={styles.label}>
                    Day Streak
                </span>
            </div>

        </div>
    );
};

export default DayStreak;