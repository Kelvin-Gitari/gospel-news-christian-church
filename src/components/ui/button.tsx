import {type ButtonHTMLAttributes, forwardRef} from "react";
import styles from "../../styles/ui/button.module.css";

type Variant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
type Size = "default" | "sm" | "lg" | "icon"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant
    size?: Size
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({className = "", variant = "default", size = "default", ...props}, ref) => {
        const classes = [
            styles.button,
            styles[variant + "Variant"] || styles.defaultVariant,
            styles[size] || styles.default,
            className
        ].join(" ")

        return (
            <button ref={ref} className={classes} {...props} />
        )
    }
)

Button.displayName = "Button"