import WelcomeHeader from "../../components/home/WelcomeHeader";
import BalanceSection from "../../components/home/BalanceSection";
import ReferralBanner from "../../components/home/ReferralBanner";
import EarnMore from "../../components/home/EarnMore";

import styles from "./Home.module.css";

const Home = () => {
    return (
        <main className={styles.home}>
            <WelcomeHeader />

            <BalanceSection />

            <ReferralBanner />

            <EarnMore />
        </main>
    );
};

export default Home;