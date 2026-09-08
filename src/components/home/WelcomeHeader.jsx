import DayStreak from "./DayStreak";
import EarningGoal from "./EarningGoal";

import styles from "./WelcomeHeader.module.css";

const WelcomeHeader = () => {
    return (
        <section className={styles.header}>

            {/* Left side */}
            <div className={styles.welcome}>

                <h1>
                    Good morning, Naveen! <span>👋</span>
                </h1>

                <p>
                    Track your rewards, complete tasks
                    <br />
                    and unlock exciting benefits every day
                </p>

            </div>

            {/* Right side */}
            <div className={styles.stats}>

                <DayStreak streak={7} />

                <EarningGoal
                    current={720}
                    target={1000}
                />

            </div>

        </section>
    );
};

export default WelcomeHeader;