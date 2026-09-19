import { ArrowRight, Gift, Users } from "lucide-react";

import styles from "./CampaignCard.module.css";

const CampaignCard = () => {
    return (
        <section className={styles.card}>
            <div className={styles.content}>
                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.iconWrapper}>
                        <Gift size={18} strokeWidth={1.8} />
                    </div>

                    <span className={styles.badge}>
                        Special Campaign
                    </span>
                </div>

                {/* Content */}
                <div className={styles.body}>
                    <h2>Invite & Earn More</h2>

                    <p>
                        Invite your friends and earn extra VEs
                        together.
                    </p>

                    <div className={styles.reward}>
                        <Users size={14} />

                        <span>
                            Earn up to <strong>500 VEs</strong>
                        </span>
                    </div>
                </div>

                {/* Action */}
                <button type="button" className={styles.button}>
                    Join Campaign
                    <ArrowRight size={14} />
                </button>
            </div>
        </section>
    );
};

export default CampaignCard;