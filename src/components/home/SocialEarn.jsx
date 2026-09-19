import {
    MessageCircle,
    Share2,
    ArrowUpRight,
    Users,
} from "lucide-react";

import styles from "./SocialEarn.module.css";

const socialItems = [
    {
    id: 1,
    icon: Users,
    title: "Follow us",
    description: "Follow VELOOP",
    reward: "+25 VE",
},
    {
        id: 2,
        icon: MessageCircle,
        title: "Join community",
        description: "Connect with us",
        reward: "+50 VE",
    },
    {
        id: 3,
        icon: Share2,
        title: "Share VELOOP",
        description: "Share with friends",
        reward: "+40 VE",
    },
];

const SocialEarn = () => {
    return (
        <section className={styles.card}>
            <div className={styles.header}>
                <div>
                    <span className={styles.eyebrow}>
                        SOCIAL EARN
                    </span>

                    <h2>Earn Through Social</h2>
                </div>

                <div className={styles.headerIcon}>
                    <Share2 size={16} />
                </div>
            </div>

            <div className={styles.list}>
                {socialItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <button
                            type="button"
                            key={item.id}
                            className={styles.item}
                        >
                            <div className={styles.itemIcon}>
                                <Icon size={15} />
                            </div>

                            <div className={styles.itemContent}>
                                <strong>{item.title}</strong>

                                <span>
                                    {item.description}
                                </span>
                            </div>

                            <div className={styles.reward}>
                                {item.reward}
                            </div>

                            <ArrowUpRight
                                className={styles.arrow}
                                size={13}
                            />
                        </button>
                    );
                })}
            </div>
        </section>
    );
};

export default SocialEarn;