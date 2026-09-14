import { ArrowRight } from "lucide-react";

import styles from "./FeatureCard.module.css";

const FeatureCard = ({
    title,
    description,
    buttonText,
    icon: Icon,
    accent = "purple",
    onClick,
}) => {
    return (
        <article className={`${styles.card} ${styles[accent]}`}>
            <div className={styles.iconWrapper}>
                <Icon size={25} strokeWidth={1.8} />
            </div>

            <div className={styles.content}>
                <h3>{title}</h3>

                <p>{description}</p>

                <button
                    type="button"
                    className={styles.actionButton}
                    onClick={onClick}
                >
                    <span>{buttonText}</span>
                    <ArrowRight size={14} />
                </button>
            </div>
        </article>
    );
};

export default FeatureCard;