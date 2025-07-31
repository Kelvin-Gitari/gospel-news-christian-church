import styles from "../../styles/ui/sidebar.module.css";
import type {FC, HTMLAttributes} from "react";
import {
    Banknote,
    CalendarCheck,
    Clapperboard,
    FileText,
    HandHelping,
    Home,
    MessageCircle,
    Settings,
    Users
} from "lucide-react";
import {useMobile} from "../../hooks/useMobile.ts";

interface SidebarProps extends HTMLAttributes<HTMLDivElement> {
    open: boolean;
    collapsed: boolean;
    onClose: () => void;
}

const mainLinks = [
    {icon: Home, label: "Dashboard", url: "/"},
    {icon: Users, label: "Members", url: "/members"},
    {icon: CalendarCheck, label: "Services & Events", url: "/services"},
    {icon: Banknote, label: "Finance & Tithe", url: "/finance"},
    {icon: HandHelping, label: "Ministries", url: "/ministries"},
    {icon: MessageCircle, label: "Communication", url: "/communication"},
    {icon: FileText, label: "Reports", url: "/reports"},
    {icon: Clapperboard, label: "Media Archive", url: "/media"},
];

const systemLinks = [
    {icon: Settings, label: "Settings", url: "/settings"},
];

export const Sidebar: FC<SidebarProps> = ({open, collapsed, className, ...props}) => {
    const isMobile = useMobile();

    const sidebarClass = [
        styles.sidebar,
        open ? styles.sidebarOpen : "",
        collapsed ? styles.sidebarCollapsed : "",
        className ?? ""
    ].join(" ");

    return (
        <aside className={sidebarClass} {...props}>
            {open && (
                <>
                    <div className={styles.header}>
                        <span className={styles.menuTitle}>Main Menu</span>
                    </div>

                    <nav className={styles.nav}>
                        {mainLinks.map(({icon: Icon, label, url}) => (
                            <a className={styles.navLink} href={url} key={label}>
                                <Icon size={18}/>
                                <span>{label}</span>
                            </a>
                        ))}

                        <div className={styles.section}>
                            <p className={styles.sectionTitle}>System</p>
                            {systemLinks.map(({icon: Icon, label, url}) => (
                                <a className={styles.navLink} href={url} key={label}>
                                    <Icon size={18}/>
                                    <span>{label}</span>
                                </a>
                            ))}
                        </div>
                    </nav>
                </>
            )}

            {!isMobile && !open && collapsed && (
                <>
                    <nav className={styles.nav}>
                        {[...mainLinks, ...systemLinks].map(({icon: Icon, label, url}) => (
                            <a
                                className={`${styles.navLink} ${styles.iconOnly}`}
                                href={url}
                                key={label}
                            >
                                <Icon size={20}/>
                            </a>
                        ))}
                    </nav>
                </>
            )}
        </aside>
    );
};