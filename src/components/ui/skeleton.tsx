import type {HTMLAttributes} from "react";
import {cn} from "../../lib/utils.ts";
import styles from "../../styles/ui/skeleton.module.css";

type SkeletonProps = HTMLAttributes<HTMLDivElement>

export function Skeleton({className, ...props}: SkeletonProps) {
    return (
        <div
            className={cn(styles.skeleton, className)}
            {...props}
        />
    );
}