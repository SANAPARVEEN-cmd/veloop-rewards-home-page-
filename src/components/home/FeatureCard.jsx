import {
    ArrowRight,
    Sparkles,
} from "lucide-react";

import styles from "./FeatureCard.module.css";

const FeatureCard = ({
    title,
    description,
    buttonText,
    icon: Icon,
    accent = "purple",
    featured = false,
    onClick,
}) => {
    return (
        <article
            className={`
                ${styles.card}
                ${styles[accent]}
                ${featured ? styles.featured : ""}
            `}
        >
            <div className={styles.cardGlow} />

            <div className={styles.topRow}>
                <div className={styles.iconWrapper}>
                    <Icon
                        size={featured ? 27 : 23}
                        strokeWidth={1.8}
                    />
                </div>

                {featured && (
                    <span className={styles.featuredBadge}>
                        <Sparkles size={10} />
                        FEATURED
                    </span>
                )}
            </div>

            <div className={styles.content}>
                <h3>{title}</h3>

                <p>{description}</p>
            </div>

            <div className={styles.bottomRow}>
                <button
                    type="button"
                    className={styles.actionButton}
                    onClick={onClick}
                    aria-label={`${buttonText} - ${title}`}
                >
                    <span>{buttonText}</span>

                    <span className={styles.arrowCircle}>
                        <ArrowRight
                            size={14}
                            strokeWidth={2}
                        />
                    </span>
                </button>

                <div
                    className={styles.accentLine}
                    aria-hidden="true"
                />
            </div>
        </article>
    );
};

export default FeatureCard;