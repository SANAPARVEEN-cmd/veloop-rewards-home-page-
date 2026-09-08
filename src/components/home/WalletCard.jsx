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
                        <Wallet size={27} strokeWidth={1.7} />

                        <h2>My Wallet</h2>
                    </div>

                    <p>
                        Manage your rewards,
                        <br />
                        view your balance
                    </p>

                    <button
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