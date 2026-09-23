import {
    ArrowRight,
    Check,
    Link2,
    Users,
} from "lucide-react";

import styles from "./ReferralBanner.module.css";

import referralImage from "../../assets/images/referrals/referral.png";
import veCoin from "../../assets/images/rewards/ve-coin.png";

const ReferralBanner = ({
    referrals = 3,
    target = 5,
    reward = 5000,
    onRefer,
    onCopyLink,
}) => {
    const percentage =
        target > 0
            ? Math.min(Math.round((referrals / target) * 100), 100)
            : 0;

    const remaining = Math.max(target - referrals, 0);

    return (
        <section className={styles.banner}>
            {/* Decorative background */}
            <div
                className={styles.backgroundGlow}
                aria-hidden="true"
            />

            <div
                className={styles.backgroundGrid}
                aria-hidden="true"
            />

            {/* =====================================================
                LEFT CONTENT
            ====================================================== */}

            <div className={styles.mainContent}>
                <div className={styles.eyebrow}>
                    <span className={styles.eyebrowDot} />
                    REFER &amp; EARN
                </div>

                <h2 className={styles.title}>
                    Invite friends.
                    <br />
                    <span>Earn rewards together.</span>
                </h2>

                <p className={styles.description}>
                    Share your referral link with friends and
                    unlock exciting VE rewards when they join
                    VELOOP.
                </p>

                {/* Referral Journey */}
                <div className={styles.journey}>
                    <div className={styles.journeyHeader}>
                        <div>
                            <span className={styles.journeyLabel}>
                                YOUR REFERRAL JOURNEY
                            </span>

                            <strong className={styles.journeyCount}>
                                {referrals}
                                <span> / {target}</span>
                            </strong>
                        </div>

                        <span className={styles.percentage}>
                            {percentage}%
                        </span>
                    </div>

                    <div
                        className={styles.milestones}
                        aria-label={`Referral progress: ${referrals} of ${target}`}
                    >
                        <div className={styles.milestoneLine}>
                            <div
                                className={styles.milestoneProgress}
                                style={{
                                    width: `${percentage}%`,
                                }}
                            />
                        </div>

                        {Array.from({ length: target }).map(
                            (_, index) => {
                                const completed =
                                    index < referrals;

                                return (
                                    <div
                                        key={index}
                                        className={`${styles.milestone} ${
                                            completed
                                                ? styles.completed
                                                : ""
                                        }`}
                                    >
                                        {completed ? (
                                            <Check
                                                size={11}
                                                strokeWidth={3}
                                            />
                                        ) : (
                                            <span>
                                                {index + 1}
                                            </span>
                                        )}
                                    </div>
                                );
                            }
                        )}
                    </div>

                    <div className={styles.journeyFooter}>
                        <span>
                            {remaining === 0
                                ? "Reward unlocked!"
                                : `${remaining} ${
                                      remaining === 1
                                          ? "referral"
                                          : "referrals"
                                  } remaining`}
                        </span>

                        <button
                            type="button"
                            className={styles.copyButton}
                            onClick={onCopyLink}
                        >
                            <Link2
                                size={13}
                                aria-hidden="true"
                            />
                            Copy link
                        </button>
                    </div>
                </div>

                {/* CTA */}
                <button
                    type="button"
                    className={styles.referButton}
                    onClick={onRefer}
                >
                    <span className={styles.buttonIcon}>
                        <Users size={16} />
                    </span>

                    <span>Invite Friends</span>

                    <ArrowRight
                        size={16}
                        className={styles.buttonArrow}
                        aria-hidden="true"
                    />
                </button>
            </div>

            {/* =====================================================
                RIGHT VISUAL
            ====================================================== */}

            <div className={styles.visualArea}>
                <div className={styles.visualGlow} />

                {/* Floating reward badge */}
                <div className={styles.rewardBadge}>
                    <span className={styles.rewardBadgeLabel}>
                        REWARD
                    </span>

                    <strong>
                        +{reward.toLocaleString()}
                    </strong>

                    <span className={styles.rewardUnit}>
                        VE
                    </span>
                </div>

                {/* Referral illustration */}
                <div className={styles.illustrationWrapper}>
                    <div
                        className={styles.illustrationRing}
                        aria-hidden="true"
                    />

                    <img
                        src={referralImage}
                        alt="Invite friends and earn rewards"
                        className={styles.referralImage}
                    />
                </div>

                {/* Floating coins */}
                <div
                    className={`${styles.floatingCoin} ${styles.coinOne}`}
                    aria-hidden="true"
                >
                    <img src={veCoin} alt="" />
                </div>

                <div
                    className={`${styles.floatingCoin} ${styles.coinTwo}`}
                    aria-hidden="true"
                >
                    <img src={veCoin} alt="" />
                </div>

                <div
                    className={`${styles.floatingCoin} ${styles.coinThree}`}
                    aria-hidden="true"
                >
                    <img src={veCoin} alt="" />
                </div>

                {/* Bottom reward text */}
                <div className={styles.rewardInfo}>
                    <span>PER SUCCESSFUL REFERRAL</span>

                    <strong>
                        Earn up to{" "}
                        <b>
                            {reward.toLocaleString()} VEs
                        </b>
                    </strong>
                </div>
            </div>
        </section>
    );
};

export default ReferralBanner;