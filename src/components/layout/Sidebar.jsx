import {
    Home,
    WalletCards,
    List,
    Gift,
    Users,
    Trophy,
    Settings,
    CircleHelp,
    Headphones,
    ArrowRight,
} from "lucide-react";

import styles from "./Sidebar.module.css";

const Sidebar = () => {
    const menuItems = [
        {
            label: "Home",
            icon: Home,
            path: "/home",
            active: true,
        },
        {
            label: "Wallet",
            icon: WalletCards,
            path: "/wallet",
        },
        {
            label: "Transactions",
            icon: List,
            path: "/transactions",
        },
        {
            label: "Redeem",
            icon: Gift,
            path: "/redeem",
        },
        {
            label: "Referrals",
            icon: Users,
            path: "/referrals",
        },
        {
            label: "Achievements",
            icon: Trophy,
            path: "/achievements",
        },
        {
            label: "Settings",
            icon: Settings,
            path: "/settings",
        },
        {
            label: "Help & Support",
            icon: CircleHelp,
            path: "/help",
        },
    ];

    return (
        <aside className={styles.sidebar}>

            {/* =================================
                NAVIGATION
            ================================= */}

            <nav className={styles.menu}>

                {menuItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <a
                            key={item.label}
                            href={item.path}
                            className={`${styles.menuItem} ${
                                item.active ? styles.active : ""
                            }`}
                        >
                            <Icon
                                size={21}
                                strokeWidth={1.8}
                                className={styles.menuIcon}
                            />

                            <span>{item.label}</span>
                        </a>
                    );
                })}

            </nav>


            {/* =================================
                SPECIAL CAMPAIGN
            ================================= */}

            <div className={styles.campaignCard}>

                <div className={styles.campaignIcon}>
                    <Gift size={38} strokeWidth={1.4} />
                </div>

                <p className={styles.campaignLabel}>
                    Special Campaign
                </p>

                <h3 className={styles.campaignTitle}>
                    Mega Rewards
                </h3>

                <p className={styles.campaignDescription}>
                    Complete tasks and unlock amazing rewards
                </p>

                <a
                    href="/rewards"
                    className={styles.campaignButton}
                >
                    <span>Explore Now</span>

                    <ArrowRight
                        size={16}
                        strokeWidth={1.8}
                    />
                </a>

            </div>


            {/* =================================
                HELP SECTION
            ================================= */}

            <div className={styles.helpSection}>

                <div className={styles.helpIcon}>
                    <Headphones
                        size={23}
                        strokeWidth={1.7}
                    />
                </div>

                <div className={styles.helpContent}>
                    <span className={styles.helpTitle}>
                        Need Help?
                    </span>

                    <span className={styles.helpEmail}>
                        support@velooprewards.com
                    </span>
                </div>

            </div>

        </aside>
    );
};

export default Sidebar;