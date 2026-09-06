import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";

// import styles from "./DashboardLayout.module.css";

const DashboardLayout = () => {
    return (
        <div className={styles.layout}>

            <Sidebar />

            <div className={styles.content}>

                <Navbar />

                <main className={styles.main}>
                    <Outlet />
                </main>

            </div>

        </div>
    );
};

export default DashboardLayout;