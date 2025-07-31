import {forwardRef, type HTMLAttributes} from "react";
import {cn} from "../../lib/utils.ts";
import styles from "../../styles/ui/separator.module.css";

type SeparatorProps = HTMLAttributes<HTMLDivElement> & {
    orientation?: "horizontal" | "vertical"
}

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
    ({ className, orientation = "horizontal", ...props }, ref) => {
        return (
            <div
                ref={ref}
                role="separator"
                aria-orientation={orientation}
                className={cn(
                    styles.separator,
                    orientation === "vertical" ? styles.vertical : styles.horizontal,
                    className
                )}
                {...props}
            />
        )
    }
)

Separator.displayName = "Separator"