import {type ReactNode, useState} from "react";
import styles from "../styles/Layout.module.css";
import gnccLogo from "../assets/gnccLogo.jpg";
import {Sidebar} from "./ui/sidebar.tsx";
import {Menu} from "lucide-react";
import {useMobile} from "../hooks/useMobile.ts";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({children}: LayoutProps) {
    const isMobile = useMobile();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidebarCollapsed = !sidebarOpen;

    const sidebarWidth = isMobile ? "0" : sidebarOpen ? "16rem" : sidebarCollapsed ? "4rem" : "0";

    return (
        <div className={styles.layoutContainer}>
            {!isMobile && (
                <Sidebar
                    open={sidebarOpen}
                    collapsed={sidebarCollapsed}
                    onClose={() => setSidebarOpen(false)}
                />
            )}

            {isMobile && sidebarOpen && (
                <Sidebar
                    open={true}
                    collapsed={false}
                    onClose={() => setSidebarOpen(false)}
                />
            )}
            <div style={{
                flex: 1,
                marginLeft: sidebarWidth,
                transition: "margin-left 0.3s ease-in-out"
            }}>
                <header className={styles.header}>
                    <div className={styles.layoutMenu}>
                        <button
                            className={styles.sidebarTrigger}
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            aria-label="Toggle Sidebar"
                        >
                            <Menu size={26}/>
                        </button>

                        <div className={styles.logoContainer}>
                            <img src={gnccLogo} alt="GNCC Logo" className={styles.logoImage}/>
                            <div>
                                <h1 className={styles.title}>GNCC Management</h1>
                                <p className={styles.subtitle}>Home of All Divine Blessings</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.userInfo}>
                        <div className={styles.userText}>
                            <p className={styles.userName}>Admin User</p>
                            <p className={styles.userRole}>Church Administrator</p>
                        </div>
                        <div className={styles.userAvatar}>AU</div>
                    </div>
                </header>

                <main className={styles.contentWrapper}>{children}</main>
            </div>
        </div>
    );
}
