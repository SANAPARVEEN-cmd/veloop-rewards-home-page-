import { Sparkles } from "lucide-react";

import FeatureCard from "./FeatureCard";
// import UpcomingFeatures from "./UpcomingFeatures";

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
                <div className={styles.titleWrapper}>
                    <Sparkles size={15} className={styles.titleIcon} />

                    <h2>Earn More</h2>
                </div>
            </div>

            {/* FEATURE GRID */}
            <div className={styles.grid}>
                {featureData.map((feature) => (
                    <FeatureCard
                        key={feature.id}
                        {...feature}
                        onClick={() => handleFeatureClick(feature)}
                    />
                ))}

                {/* <UpcomingFeatures /> */}
            </div>
        </section>
    );
};

export default EarnMore;