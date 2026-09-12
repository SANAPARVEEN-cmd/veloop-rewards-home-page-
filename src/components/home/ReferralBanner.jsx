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
    const percentage = Math.min(
        Math.round((referrals / target) * 100),
        100
    );

    const remaining = Math.max(target - referrals, 0);

    return (
        <section className={styles.banner}>

            {/* =====================================
                LEFT — REFERRAL CONTENT
            ===================================== */}

            <div className={styles.referralContent}>

                <div className={styles.imageWrapper}>
                    <img
                        src={referralImage}
                        alt="Invite friends"
                        className={styles.referralImage}
                    />
                </div>

                <div className={styles.textContent}>

                    <h2>
                        Invite Friends. Earn Rewards.
                    </h2>

                    <p>
                        Share your referral link and earn amazing
                        <br />
                        rewards when your friends join VELOOP Rewards.
                    </p>

                    <button
                        type="button"
                        className={styles.referButton}
                        onClick={onRefer}
                    >
                        <span>Refer &amp; Earn</span>

                        <ArrowRight size={16} />
                    </button>

                </div>

            </div>


            {/* =====================================
                MIDDLE — REFERRAL PROGRESS
            ===================================== */}

            <div className={styles.progressSection}>

                <div className={styles.progressHeader}>

                    <span>
                        Referral Progress
                    </span>

                    <strong>
                        {referrals} / {target}
                    </strong>

                </div>

                <div className={styles.progressTrack}>
                    <div
                        className={styles.progress}
                        style={{
                            width: `${percentage}%`,
                        }}
                    />
                </div>

                <div className={styles.progressInfo}>

                    <span>
                        {percentage}%
                    </span>

                </div>

                <p className={styles.progressMessage}>
                    You are {remaining} referrals away from your
                    next reward!
                </p>

                <button
                    type="button"
                    className={styles.copyButton}
                    onClick={onCopyLink}
                >
                    <Link2 size={15} />

                    <span>
                        Copy Referral Link
                    </span>
                </button>

            </div>


            {/* =====================================
                RIGHT — REWARD
            ===================================== */}

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

                <div className={styles.coins}>

                    <img
                        src={veCoin}
                        alt="VE coin"
                        className={styles.coinBack}
                    />

                    <img
                        src={veCoin}
                        alt="VE coin"
                        className={styles.coinFront}
                    />

                </div>

            </div>

        </section>
    );
};

export default ReferralBanner;