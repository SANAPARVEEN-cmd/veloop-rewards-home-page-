import WelcomeHeader from "../../components/home/WelcomeHeader";

import styles from "./Home.module.css";

const Home = () => {
    return (
        <main className={styles.home}>
            <WelcomeHeader />
        </main>
    );
};

export default Home;