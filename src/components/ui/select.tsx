import * as SelectPrimitive from "@radix-ui/react-select";
import {Check, ChevronDown, ChevronUp} from "lucide-react";
import styles from "../../styles/ui/select.module.css";
import {forwardRef, type ComponentPropsWithoutRef, type ElementRef} from "react";
import {cn} from "../../lib/utils.ts";

const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

const SelectTrigger = forwardRef<
    ElementRef<typeof SelectPrimitive.Trigger>,
    ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({className, children, ...props}, ref) => (
    <SelectPrimitive.Trigger
        ref={ref}
        className={cn(styles.selectTrigger, className)}
        {...props}
    >
        {children}
        <SelectPrimitive.Icon asChild>
            <ChevronDown className={styles.selectIcon}/>
        </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = forwardRef<
    ElementRef<typeof SelectPrimitive.ScrollUpButton>,
    ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({className, ...props}, ref) => (
    <SelectPrimitive.ScrollUpButton
        ref={ref}
        className={cn(styles.scrollButton, className)}
        {...props}
    >
        <ChevronUp className="h-4 w-4"/>
    </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = forwardRef<
    ElementRef<typeof SelectPrimitive.ScrollDownButton>,
    ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({className, ...props}, ref) => (
    <SelectPrimitive.ScrollDownButton
        ref={ref}
        className={cn(styles.scrollButton, className)}
        {...props}
    >
        <ChevronDown className="h-4 w-4"/>
    </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = forwardRef<
    ElementRef<typeof SelectPrimitive.Content>,
    ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({className, children, position = "popper", ...props}, ref) => (
    <SelectPrimitive.Portal>
        <SelectPrimitive.Content
            ref={ref}
            className={cn(
                styles.selectContent,
                position === "popper" && styles.selectContentPopper,
                className
            )}
            position={position}
            {...props}
        >
            <SelectScrollUpButton/>
            <SelectPrimitive.Viewport
                className={cn(
                    styles.viewport,
                    position === "popper" && styles.viewportPopper
                )}
            >
                {children}
            </SelectPrimitive.Viewport>
            <SelectScrollDownButton/>
        </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = forwardRef<
    ElementRef<typeof SelectPrimitive.Label>,
    ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({className, ...props}, ref) => (
    <SelectPrimitive.Label
        ref={ref}
        className={cn(styles.label, className)}
        {...props}
    />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = forwardRef<
    ElementRef<typeof SelectPrimitive.Item>,
    ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({className, children, ...props}, ref) => (
    <SelectPrimitive.Item
        ref={ref}
        className={cn(styles.item, className)}
        {...props}
    >
    <span className={styles.itemIndicator}>
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4"/>
      </SelectPrimitive.ItemIndicator>
    </span>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = forwardRef<
    ElementRef<typeof SelectPrimitive.Separator>,
    ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({className, ...props}, ref) => (
    <SelectPrimitive.Separator
        ref={ref}
        className={cn(styles.separator, className)}
        {...props}
    />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
    Select,
    SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectLabel,
    SelectItem,
    SelectSeparator,
    SelectScrollUpButton,
    SelectScrollDownButton,
};
