import {type ComponentPropsWithoutRef, type ElementRef, forwardRef} from "react";
import {cn} from "../../lib/utils.ts";
import styles from "../../styles/ui/label.module.css";
import * as LabelPrimitive from "@radix-ui/react-label";

export const Label = forwardRef<
    ElementRef<typeof LabelPrimitive.Root>,
    ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
    <LabelPrimitive.Root
        ref={ref}
        className={cn(styles.label, className)}
        {...props}
    />
))
Label.displayName = LabelPrimitive.Root.displayName || "Label";
