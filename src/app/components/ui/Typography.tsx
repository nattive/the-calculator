import React from 'react';
import { cn } from '@/utils/cn';

type VariantType = 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'subtext' | 'caption' | "label" | "display"
type AsType = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div' | 'label'

interface TypographyProps {
    variant?: VariantType;
    as?: AsType;
    children: React.ReactNode;
    className?: string;
}

const variantStyles: Record<VariantType, string> = {
    // Main heading
    h1: `
        font-sans font-bold 
        text-2xl leading-tight 
        sm:text-3xl sm:leading-relaxed 
        text-primary-700 
        dark:text-primary-500 
        transition-colors duration-200
    `,
    // Secondary heading
    h2: `
        font-sans font-semibold 
        text-xl leading-tight 
        sm:text-2xl sm:leading-relaxed 
        text-primary-700 
        dark:text-primary-500
    `,
    // Third level heading
    h3: `
    font-sans
    font-semibold
    text-2xs
     text-lg  
    leading-[32px]
    text-primary-700
`,
    // Fourth level heading
    h4: `
        font-sans font-medium 
        text-base leading-normal 
        sm:text-lg sm:leading-relaxed 
        text-primary-700 
        dark:text-primary-500
    `,
    // Main body text
    body: `
        font-sans font-medium 
        text-base leading-snug 
        sm:text-xl sm:leading-loose 
        text-teal-700
    `,
    // Subtext for additional context
    subtext: `
        font-sans font-medium 
        text-base leading-snug 
        sm:text-xl sm:leading-loose 
        text-teal-700
    `,
    // large
    display: `
        font-sans 
        font-bold          
        text-2xl    
        md:text-display     
        text-primary-700 
    `,
    // Small text/caption
    caption: `
    capitalize-first font-sans font-normal sm:text-intermediate text-medium-lg  leading-copy  text-primary-700/80  dark:text-primary-300/80
    `,
    label: `
        font-sans 
        font-semibold 
        text-intermediate    
        md:text-lg  
        lg:text-xl   
        text-primary-900 
        transition-colors
        duration-200
`

};


const defaultElementMapping: Record<VariantType, AsType> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    body: 'p',
    subtext: 'p',
    label: 'label',
    caption: 'span',
    display: 'h1'
};

export const Typography = ({
    variant = 'body',
    as,
    children,
    className,
    ...props
}: TypographyProps & React.HTMLAttributes<HTMLElement>) => {
    const Component = as || defaultElementMapping[variant];

    return (
        <Component
            className={cn(variantStyles[variant], className)}
            {...props}
        >
            {children}
        </Component>
    );
};
