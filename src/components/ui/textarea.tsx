import {forwardRef, type TextareaHTMLAttributes} from "react";
import {cn} from "../../lib/utils.ts";
import styles from "../../styles/ui/textarea.module.css";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({className, ...props}, ref) => {
        return (
            <textarea
                ref={ref}
                className={cn(styles.textarea, className)}
                {...props}
            />
        );
    }
);
Textarea.displayName = "Textarea";