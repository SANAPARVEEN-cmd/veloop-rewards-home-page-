import { ArrowUpRight } from "lucide-react";

import { activityData } from "../../data/activityData";

import styles from "./RecentActivity.module.css";

const RecentActivity = () => {
    return (
        <section className={styles.card}>
            {/* HEADER */}
            <div className={styles.header}>
                <h2>Recent Activity</h2>

                <button
                    type="button"
                    className={styles.viewAll}
                >
                    View All
                    <ArrowUpRight size={13} />
                </button>
            </div>

            {/* ACTIVITY LIST */}
            <div className={styles.activityList}>
                {activityData.map((activity) => {
                    const Icon = activity.icon;

                    return (
                        <div
                            key={activity.id}
                            className={styles.activityItem}
                        >
                            {/* ICON */}
                            <div
                                className={`${styles.iconWrapper} ${styles[activity.accent]}`}
                            >
                                <Icon
                                    size={16}
                                    strokeWidth={2}
                                />
                            </div>

                            {/* DETAILS */}
                            <div className={styles.details}>
                                <h3>{activity.title}</h3>

                                <p>
                                    {activity.description}
                                </p>

                                <span>
                                    {activity.time}
                                </span>
                            </div>

                            {/* AMOUNT */}
                            <div className={styles.amount}>
                                {activity.amount}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default RecentActivity;