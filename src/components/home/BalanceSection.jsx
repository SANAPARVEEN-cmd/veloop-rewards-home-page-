import VEBalanceCard from "./VEBalanceCard";
import SVEBalanceCard from "./SVEBalanceCard";
import WalletCard from "./WalletCard";

import styles from "./BalanceSection.module.css";

const BalanceSection = () => {
    return (
        <section className={styles.balanceSection}>

            <VEBalanceCard />

            <SVEBalanceCard />

            <WalletCard />

        </section>
    );
};

export default BalanceSection;