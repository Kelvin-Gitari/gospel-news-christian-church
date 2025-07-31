import {type ComponentPropsWithoutRef, type ElementRef, forwardRef} from "react";
import {cn} from "../../lib/utils.ts";
import styles from "../../styles/ui/switch.module.css";
import * as SwitchPrimitives from "@radix-ui/react-switch";

export const Switch = forwardRef<
    ElementRef<typeof SwitchPrimitives.Root>,
    ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
    <SwitchPrimitives.Root
        className={cn(styles.root, className)}
        {...props}
        ref={ref}
    >
        <SwitchPrimitives.Thumb
            className={styles.thumb}
        />
    </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;