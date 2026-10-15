import { ArrowRight, Wallet } from "lucide-react";

import styles from "./WalletCard.module.css";

import walletImage from "../../assets/images/wallet/wallet.png";

const WalletCard = ({
    balance = 245.80,
    onViewWallet,
}) => {
    return (
        <div className={styles.card}>

            {/* WALLET CONTENT */}
            <div className={styles.content}>

                <div className={styles.textContent}>

                    <div className={styles.heading}>
                        <span className={styles.headingIcon}>
                            <Wallet size={17} strokeWidth={1.8} />
                        </span>

                        <h2>My Wallet</h2>
                    </div>

                    <div className={styles.balanceBlock}>
                        <span className={styles.balanceLabel}>Available balance</span>
                        <p className={styles.balance}>
                            ${balance.toFixed(2)}
                        </p>
                    </div>

                    <button
                        type="button"
                        className={styles.button}
                        onClick={onViewWallet}
                    >
                        <span>View Wallet</span>
                        <ArrowRight size={16} />
                    </button>

                </div>

                {/* WALLET IMAGE */}
                <div className={styles.imageWrapper}>
                    <img
                        src={walletImage}
                        alt="Wallet"
                        className={styles.walletImage}
                    />
                </div>

            </div>

        </div>
    );
};

export default WalletCard;