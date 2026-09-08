import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import styles from "./DashboardLayout.module.css";

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className={styles.layout}>

            <Navbar
                isSidebarOpen={isSidebarOpen}
                onMenuToggle={() => setIsSidebarOpen((isOpen) => !isOpen)}
            />

            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />

            <main className={styles.mainContent}>
                <Outlet />
            </main>

        </div>
    );
};

export default DashboardLayout;