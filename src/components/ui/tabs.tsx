import * as TabsPrimitive from "@radix-ui/react-tabs";
import {forwardRef, type ElementRef, type ComponentPropsWithoutRef} from "react";
import {cn} from "../../lib/utils.ts";
import styles from "../../styles/ui/tabs.module.css";

const Tabs = TabsPrimitive.Root;

const TabsList = forwardRef<
    ElementRef<typeof TabsPrimitive.List>,
    ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({className, ...props}, ref) => (
    <TabsPrimitive.List
        ref={ref}
        className={cn(styles.tabsList, className)}
        {...props}
    />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = forwardRef<
    ElementRef<typeof TabsPrimitive.Trigger>,
    ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({className, ...props}, ref) => (
    <TabsPrimitive.Trigger
        ref={ref}
        className={cn(styles.tabsTrigger, className)}
        {...props}
    />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = forwardRef<
    ElementRef<typeof TabsPrimitive.Content>,
    ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({className, ...props}, ref) => (
    <TabsPrimitive.Content
        ref={ref}
        className={cn(styles.tabsContent, className)}
        {...props}
    />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export {Tabs, TabsList, TabsTrigger, TabsContent};