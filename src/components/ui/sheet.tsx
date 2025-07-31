import {type HTMLAttributes, type ReactNode, useEffect} from "react";
import styles from "../../styles/ui/sheet.module.css";

export const Sheet = ({children, open, onOpenChange,}: {
    children: ReactNode;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}) => {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onOpenChange(false);
        };
        if (open) document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [open, onOpenChange]);

    if (!open) return null;

    return <div className={styles.sheet}>{children}</div>;
};

export const SheetPortal = ({children}: { children: ReactNode }) => {
    return <div className={styles.portal}>{children}</div>;
};

export const SheetOverlay = ({onClose}: { onClose: () => void }) => {
    return <div className={styles.overlay} onClick={onClose}/>;
};

interface SheetContentProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    position?: "left" | "right" | "top" | "bottom";
}

export const SheetContent = ({children, position = "right", className, style, ...props}: SheetContentProps) => {
    return (
        <div
            className={`${styles.content} ${styles[position]} ${className ?? ""}`}
            style={style}
            {...props}
        >
            {children}
        </div>
    );
};

export const SheetHeader = ({children}: { children: ReactNode }) => {
    return <div className={styles.header}>{children}</div>;
};

export const SheetTitle = ({children}: { children: ReactNode }) => {
    return <h2 className={styles.title}>{children}</h2>;
};

export const SheetDescription = ({children}: { children: ReactNode }) => {
    return <p className={styles.description}>{children}</p>;
};

export const SheetFooter = ({children}: { children: ReactNode }) => {
    return <div className={styles.footer}>{children}</div>;
};

export const SheetClose = ({onClick, children}: { onClick: () => void; children: ReactNode }) => {
    return (
        <button className={styles.close} onClick={onClick}>
            {children}
        </button>
    );
};

export const SheetTrigger = ({children, onOpen}: { children: ReactNode; onOpen: () => void; }) => {
    return (
        <button className={styles.trigger} onClick={onOpen}>
            {children}
        </button>
    );
};