import type {FC, HTMLAttributes} from "react";
import styles from "../../styles/ui/badge.module.css";

export type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
    variant?: BadgeVariant;
}

export const Badge: FC<BadgeProps> = ({ variant = "default", className, ...props }) => {
    const variantClass = styles[variant] || styles.default;

    return (
        <div
            className={`${styles.badge} ${variantClass} ${className || ""}`}
            {...props}
        />
    );
};