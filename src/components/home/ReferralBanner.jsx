import { ArrowRight, Link2 } from "lucide-react";

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
            {/* =========================
                LEFT — INTRO
            ========================== */}
            <div className={styles.referralIntro}>
                <div className={styles.imageWrapper}>
                    <img
                        src={referralImage}
                        alt="Invite friends and earn rewards"
                        className={styles.referralImage}
                    />
                </div>

                <div className={styles.textContent}>
                    <h2>Invite Friends. Earn Rewards.</h2>

                    <p>
                        Share your referral link and earn amazing rewards
                        when your friends join VELOOP Rewards.
                    </p>

                    <button
                        type="button"
                        className={styles.referButton}
                        onClick={onRefer}
                    >
                        <span>Refer &amp; Earn</span>
                        <ArrowRight size={16} aria-hidden="true" />
                    </button>
                </div>
            </div>

            {/* =========================
                RIGHT — TWO CARDS
            ========================== */}
            <div className={styles.rightContent}>
                {/* =========================
                    PROGRESS CARD
                ========================== */}
                <div className={styles.progressSection}>
                    <div className={styles.cardHeader}>
                        <span>Referral Progress</span>

                        <strong>
                            {referrals} / {target}
                        </strong>
                    </div>

                    <div
                        className={styles.progressTrack}
                        role="progressbar"
                        aria-valuenow={percentage}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-label="Referral progress"
                    >
                        <div
                            className={styles.progress}
                            style={{
                                width: `${percentage}%`,
                            }}
                        />
                    </div>

                    <div className={styles.progressPercentage}>
                        {percentage}%
                    </div>

                    <p className={styles.progressMessage}>
                        {remaining === 0
                            ? "You have reached your next reward!"
                            : `You are ${remaining} ${
                                  remaining === 1 ? "referral" : "referrals"
                              } away from your next reward!`}
                    </p>

                    <button
                        type="button"
                        className={styles.copyButton}
                        onClick={onCopyLink}
                    >
                        <Link2 size={15} aria-hidden="true" />
                        <span>Copy Referral Link</span>
                    </button>
                </div>

                {/* =========================
                    REWARD CARD
                ========================== */}
                <div className={styles.rewardSection}>
                    <div className={styles.rewardText}>
                        <span className={styles.rewardLabel}>
                            You can earn up to
                        </span>

                        <strong className={styles.rewardAmount}>
                            {reward.toLocaleString()} VEs
                        </strong>

                        <span className={styles.rewardDescription}>
                            per successful referral
                        </span>
                    </div>

                    <div className={styles.coins} aria-hidden="true">
                        <img
                            src={veCoin}
                            alt=""
                            className={styles.coinBack}
                        />

                        <img
                            src={veCoin}
                            alt=""
                            className={styles.coinMiddle}
                        />

                        <img
                            src={veCoin}
                            alt=""
                            className={styles.coinFront}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReferralBanner;