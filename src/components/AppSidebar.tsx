// import {
//     BarChart3,
//     Calendar,
//     Church,
//     DollarSign,
//     Home,
//     MessageSquare,
//     Settings,
//     Users,
//     Users2,
//     Video
// } from "lucide-react";
// import {NavLink} from "react-router-dom";
// import {
//     Sidebar,
//     SidebarContent,
//     SidebarGroup,
//     SidebarGroupContent,
//     SidebarGroupLabel,
//     SidebarMenu, SidebarMenuButton,
//     SidebarMenuItem
// } from "./ui/sidebar";
// import styles from "../styles/AppSidebar.module.css";
// import {useSidebarState} from "../hooks/useSidebarState.ts";
//
// const mainItems = [
//     {title: "Dashboard", url: "/", icon: Home},
//     {title: "Members", url: "/members", icon: Users},
//     {title: "Services & Events", url: "/services", icon: Calendar},
//     {title: "Finance & Tithing", url: "/finance", icon: DollarSign},
//     {title: "Ministries", url: "/ministries", icon: Users2},
//     {title: "Communication", url: "/communication", icon: MessageSquare},
//     {title: "Reports", url: "/reports", icon: BarChart3},
//     {title: "Media Archive", url: "/media", icon: Video},
// ];
//
// const systemItems = [
//     {title: "Settings", url: "/settings", icon: Settings},
// ];
//
// export function AppSidebar() {
//     const {sidebarState} = useSidebarState();
//     const isCollapsed = sidebarState === "collapsed";
//
//     const getNavCls = ({isActive}: { isActive: boolean }) =>
//         isActive ? `${styles.activeLink}` : `${styles.link}`;
//
//     return (
//         <Sidebar collapsible="icon">
//             <SidebarContent className={styles.sidebarCard}>
//                 {!isCollapsed && (
//                     <div className={styles.branding}>
//                         <div className={styles.brandingInner}>
//                             <Church className={styles.brandingIcon}/>
//                             <div>
//                                 <h2 className={styles.brandingTitle}>GNCC Management</h2>
//                                 <p className={styles.brandingSubtitle}>Divine Blessings</p>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//
//                 <SidebarGroup>
//                     <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
//                     <SidebarGroupContent>
//                         <SidebarMenu>
//                             {mainItems.map((item) => (
//                                 <SidebarMenuItem key={item.title}>
//                                     <SidebarMenuButton asChild>
//                                         <NavLink to={item.url} end className={getNavCls}>
//                                             <item.icon className={styles.icon}/>
//                                             <span>{item.title}</span>
//                                         </NavLink>
//                                     </SidebarMenuButton>
//                                 </SidebarMenuItem>
//                             ))}
//                         </SidebarMenu>
//                     </SidebarGroupContent>
//                 </SidebarGroup>
//
//                 <SidebarGroup>
//                     <SidebarGroupLabel>System</SidebarGroupLabel>
//                     <SidebarGroupContent>
//                         <SidebarMenu>
//                             {systemItems.map((item) => (
//                                 <SidebarMenuItem key={item.title}>
//                                     <SidebarMenuButton asChild>
//                                         <NavLink to={item.url} end className={getNavCls}>
//                                             <item.icon className={styles.icon}/>
//                                             <span>{item.title}</span>
//                                         </NavLink>
//                                     </SidebarMenuButton>
//                                 </SidebarMenuItem>
//                             ))}
//                         </SidebarMenu>
//                     </SidebarGroupContent>
//                 </SidebarGroup>
//             </SidebarContent>
//         </Sidebar>
//     );
// }
