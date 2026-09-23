import { ArrowUpRight, Sparkles } from "lucide-react";

import FeatureCard from "./FeatureCard";

import { featureData } from "../../data/featureData";

import styles from "./EarnMore.module.css";

const EarnMore = () => {
    const handleFeatureClick = (feature) => {
        console.log(`${feature.title} clicked`);
    };

    return (
        <section className={styles.section}>
            {/* SECTION HEADER */}
            <div className={styles.header}>
                <div className={styles.headingGroup}>
                    <div className={styles.sectionIcon}>
                        <Sparkles size={17} strokeWidth={2} />
                    </div>

                    <div>
                        <div className={styles.titleRow}>
                            <h2>Earn More</h2>

                            <span className={styles.liveBadge}>
                                <span />
                                LIVE
                            </span>
                        </div>

                        <p>
                            Turn your everyday activity into VE rewards.
                        </p>
                    </div>
                </div>

                <button
                    type="button"
                    className={styles.viewButton}
                >
                    <span>Explore all</span>
                    <ArrowUpRight
                        size={15}
                        strokeWidth={1.8}
                    />
                </button>
            </div>

            {/* FEATURE GRID */}
            <div className={styles.grid}>
                {featureData.map((feature, index) => (
                    <FeatureCard
                        key={feature.id}
                        {...feature}
                        featured={index === 0}
                        onClick={() => handleFeatureClick(feature)}
                    />
                ))}
            </div>
        </section>
    );
};

export default EarnMore;