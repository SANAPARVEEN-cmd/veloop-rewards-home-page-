import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import styles from "./DashboardLayout.module.css";

const DashboardLayout = () => {
    return (
        <div className={styles.layout}>

            <Navbar />

            <Sidebar />

            <main className={styles.mainContent}>
                <Outlet />
            </main>

        </div>
    );
};

export default DashboardLayout;