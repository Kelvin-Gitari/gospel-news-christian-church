import {type ComponentProps, forwardRef} from "react";
import styles from "../../styles/ui/input.module.css";

export const Input = forwardRef<HTMLInputElement, ComponentProps<"input">>(
    ({className, type, ...props}, ref) => {
        return (
            <input
                type={type}
                className={`${styles.input} ${className ?? ""}`}
                ref={ref}
                {...props}
            />
        )
    }
)

Input.displayName = "Input"