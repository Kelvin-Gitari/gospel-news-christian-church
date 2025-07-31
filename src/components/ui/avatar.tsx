import * as AvatarPrimitive from "@radix-ui/react-avatar"
import styles from "../../styles/ui/avatar.module.css";
import {type ComponentPropsWithoutRef, type ElementRef, forwardRef} from "react";

const Avatar = forwardRef<
    ElementRef<typeof AvatarPrimitive.Root>,
    ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({className = "", ...props}, ref) => (
    <AvatarPrimitive.Root
        ref={ref}
        className={`${styles.avatarRoot} ${className}`}
        {...props}
    />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = forwardRef<
    ElementRef<typeof AvatarPrimitive.Image>,
    ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({className = "", ...props}, ref) => (
    <AvatarPrimitive.Image
        ref={ref}
        className={`${styles.avatarImage} ${className}`}
        {...props}
    />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = forwardRef<
    ElementRef<typeof AvatarPrimitive.Fallback>,
    ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({className = "", ...props}, ref) => (
    <AvatarPrimitive.Fallback
        ref={ref}
        className={`${styles.avatarFallback} ${className}`}
        {...props}
    />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export {Avatar, AvatarImage, AvatarFallback}
