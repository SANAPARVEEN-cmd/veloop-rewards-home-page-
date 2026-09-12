import WelcomeHeader from "../../components/home/WelcomeHeader";
import BalanceSection from "../../components/home/BalanceSection";
import ReferralBanner from "../../components/home/ReferralBanner";

import styles from "./Home.module.css";

const Home = () => {
    return (
        <main className={styles.home}>

            <WelcomeHeader />

            <BalanceSection />

            <ReferralBanner />

        </main>
    );
};

export default Home;