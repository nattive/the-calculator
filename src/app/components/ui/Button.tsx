import { cn } from '@/utils/cn';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'link';
    fullWidth?: boolean;
    size?: 'default' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    variant = 'primary',
    fullWidth = true,
    size = 'default',
    disabled,
    ...props
}, ref) => {
    const baseStyles = "capitalize-first text-md md:text-xl font-medium h-button transition-all duration-200 rounded-regular flex items-center justify-center gap-2 disabled:cursor-not-allowed active:scale-[0.98]";

    const variants = {
        primary: [
            "bg-primary-900",
            "text-utility-white",
            "hover:bg-primary-700",
            "disabled:bg-primary-900/50",
            "disabled:text-white/50"
        ].join(" "),
        secondary: [
            "bg-utility-white",
            "text-primary-900",
            "border-2",
            "border-primary-900",
            "hover:bg-grey-100",
            "disabled:bg-utility-white/50",
            "disabled:border-primary-900/50",
            "disabled:text-primary-900/50"
        ].join(" "),
        link: [
            "font-poppins",
            "font-semibold",
            "text-accent-500",
            "dark:text-grey-300",
            "hover:text-accent-700",
            "transition-colors",
            "leading-[27px]",
            "disabled:text-grey-100/50",
            "p-0"
        ].join(" ")
    };

    const sizes = {
        default: "px-6 py-3 text-base",
        lg: "px-8 py-3 text-lg"
    };

    const widthClasses = fullWidth ? "w-full" : "w-full sm:w-auto";

    // Only apply size classes to non-link variants
    const sizeClass = variant === 'link' ? '' : sizes[size];

    return (
        <button
            className={cn(
                baseStyles,
                variants[variant],
                sizeClass,
                variant !== 'link' && widthClasses,
                className
            )}
            disabled={disabled}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    );
});

Button.displayName = "Button";

export { Button };