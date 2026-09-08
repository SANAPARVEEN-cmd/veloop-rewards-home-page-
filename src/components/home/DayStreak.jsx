import { Flame } from "lucide-react";
import styles from "./DayStreak.module.css";

const DayStreak = ({ streak = 7 }) => {
    return (
        <div className={styles.streak}>
            <div className={styles.iconWrapper}>
                <Flame
                    size={22}
                    strokeWidth={2}
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