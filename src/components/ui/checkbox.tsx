import {forwardRef, type ElementRef, type ComponentPropsWithoutRef} from "react";
import {cn} from "../../lib/utils.ts";
import {Check} from "lucide-react";
import styles from "../../styles/ui/checkbox.module.css";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"

export const Checkbox = forwardRef<
    ElementRef<typeof CheckboxPrimitive.Root>,
    ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
    <CheckboxPrimitive.Root
        ref={ref}
        className={cn(styles.checkboxRoot, className)}
        {...props}
    >
        <CheckboxPrimitive.Indicator className={styles.checkboxIndicator}>
            <Check className="h-4 w-4" />
        </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName