"use client";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function AuroraText({ className, children, ...props }) {
    return (
        <span
            className={cn(
                "bg-clip-text text-transparent bg-[length:300%_auto] animate-aurora",
                "bg-gradient-to-r from-secondary via-white to-secondary via-accent to-highlight",
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
}
