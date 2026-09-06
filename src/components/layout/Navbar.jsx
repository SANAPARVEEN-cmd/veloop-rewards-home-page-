import {
    Globe2,
    Sun,
    Bell,
    ChevronDown,
    Home,
    CircleDollarSign,
    Gift,
    Users,
    Trophy
} from "lucide-react";

import { FaUser } from "react-icons/fa";

import logo from "../../assets/images/logo/veloop-logo.png";

import styles from "./Navbar.module.css";

const Navbar = () => {
    const navigationItems = [
        {
            label: "Home",
            icon: Home,
            path: "/home",
            active: true
        },
        {
            label: "Earn",
            icon: CircleDollarSign,
            path: "/earn"
        },
        {
            label: "Rewards",
            icon: Gift,
            path: "/rewards"
        },
        {
            label: "Community",
            icon: Users,
            path: "/community"
        },
        {
            label: "Leaderboard",
            icon: Trophy,
            path: "/leaderboard"
        }
    ];

    return (
        <header className={styles.navbar}>

            {/* =========================
                LEFT - BRAND
            ========================== */}
            <div className={styles.brandSection}>

                <button
                    className={styles.mobileMenuButton}
                    aria-label="Open navigation menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <a href="/home" className={styles.logoLink}>
                    <img
                        src={logo}
                        alt="VELOOP Rewards"
                        className={styles.logo}
                    />
                </a>

            </div>


            {/* =========================
                CENTER - NAVIGATION
            ========================== */}
            <nav className={styles.navigation}>

                {navigationItems.map((item) => {

                    const Icon = item.icon;

                    return (
                        <a
                            key={item.label}
                            href={item.path}
                            className={`${styles.navItem} ${
                                item.active ? styles.active : ""
                            }`}
                        >

                            <Icon
                                size={20}
                                strokeWidth={1.8}
                            />

                            <span>{item.label}</span>

                        </a>
                    );

                })}

            </nav>


            {/* =========================
                RIGHT - ACTIONS
            ========================== */}
            <div className={styles.actions}>

                {/* Language */}
                <button
                    className={styles.languageButton}
                    aria-label="Select language"
                >

                    <Globe2
                        size={19}
                        strokeWidth={1.8}
                    />

                    <span>English</span>

                    <ChevronDown
                        size={16}
                        strokeWidth={1.8}
                    />

                </button>


                {/* Theme */}
                <button
                    className={styles.iconButton}
                    aria-label="Toggle theme"
                >
                    <Sun
                        size={20}
                        strokeWidth={1.8}
                    />
                </button>


                {/* Notifications */}
                <button
                    className={styles.notificationButton}
                    aria-label="Notifications"
                >

                    <Bell
                        size={21}
                        strokeWidth={1.8}
                    />

                    <span className={styles.notificationBadge}>
                        3
                    </span>

                </button>


                {/* Profile */}
                <button
                    className={styles.profileButton}
                    aria-label="Open profile menu"
                >

                    <span className={styles.avatar}>
                        <FaUser size={15} />
                    </span>

                    <span className={styles.profileName}>
                        Alice
                    </span>

                    <ChevronDown
                        size={16}
                        strokeWidth={1.8}
                    />

                </button>

            </div>

        </header>
    );
};

export default Navbar;