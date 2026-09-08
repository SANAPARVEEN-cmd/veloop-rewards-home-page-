import WelcomeHeader from "../../components/home/WelcomeHeader";
import BalanceSection from "../../components/home/BalanceSection";

import styles from "./Home.module.css";

const Home = () => {
    return (
        <main className={styles.home}>

            <WelcomeHeader />

            <BalanceSection />

        </main>
    );
};

export default Home;