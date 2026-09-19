import WelcomeHeader from "../../components/home/WelcomeHeader";
import BalanceSection from "../../components/home/BalanceSection";
import ReferralBanner from "../../components/home/ReferralBanner";
import EarnMore from "../../components/home/EarnMore";
import RecentActivity from "../../components/home/RecentActivity";
import CampaignCard from "../../components/home/CampaignCard";
import SocialEarn from "../../components/home/SocialEarn";
import SupportCard from "../../components/home/SupportCard";
import SecurityNotice from "../../components/home/SecurityNotice";

import styles from "./Home.module.css";

const Home = () => {
    return (
        <main className={styles.home}>
            <WelcomeHeader />

            <BalanceSection />

            <ReferralBanner />

            <div className={styles.lowerDashboard}>
                <EarnMore />
                <RecentActivity />
            </div>

            <div className={styles.engagementGrid}>
                <CampaignCard />
                <SocialEarn />
            </div>

            <SupportCard />

            <SecurityNotice />
        </main>
    );
};

export default Home;