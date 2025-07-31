// import {useMobile} from "./useMobile";
// import {useCallback, useEffect, useState} from "react";
// import {SIDEBAR_COOKIE_MAX_AGE, SIDEBAR_COOKIE_NAME, SIDEBAR_KEYBOARD_SHORTCUT} from "../components/ui/sidebar.tsx";
//
// export const useSidebarState = ({
//                                     defaultOpen = true,
//                                     open: controlledOpen,
//                                     onOpenChange,
//                                 }: {
//     defaultOpen?: boolean;
//     open?: boolean;
//     onOpenChange?: (value: boolean) => void;
// } = {}) => {
//     const isMobile = useMobile();
//
//     const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
//     const [mobileOpen, setMobileOpen] = useState(false);
//
//     const open = controlledOpen ?? uncontrolledOpen;
//
//     const setOpen = useCallback(
//         (value: boolean | ((prev: boolean) => boolean)) => {
//             const newValue = typeof value === "function" ? value(open) : value;
//             if (onOpenChange) {
//                 onOpenChange(newValue);
//             } else {
//                 setUncontrolledOpen(newValue);
//             }
//             document.cookie = `${SIDEBAR_COOKIE_NAME}=${newValue}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
//         },
//         [open, onOpenChange]
//     );
//
//     const toggleSidebar = useCallback(() => {
//         if (isMobile) {
//             setMobileOpen((prev) => !prev);
//         } else {
//             setOpen((prev) => !prev);
//         }
//     }, [isMobile, setOpen]);
//
//     useEffect(() => {
//         const handleKeyDown = (event: KeyboardEvent) => {
//             if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.ctrlKey || event.metaKey)) {
//                 event.preventDefault();
//                 toggleSidebar();
//             }
//         };
//         window.addEventListener("keydown", handleKeyDown);
//         return () => window.removeEventListener("keydown", handleKeyDown);
//     }, [toggleSidebar]);
//
//     const sidebarState = open ? "expanded" : "collapsed";
//
//     return {
//         open,
//         setOpen,
//         toggleSidebar,
//         sidebarState,
//         mobileOpen,
//         setMobileOpen,
//         isMobile,
//     };
// };