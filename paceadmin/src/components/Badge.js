import React from 'react';
import { cn } from '@/lib/utils';

export const Badge = ({ children, variant = 'default', className }) => {
    const variants = {
        default: 'bg-gray-100 text-admin-label border-gray-200',
        success: 'bg-pace-green/5 text-pace-green border-pace-green/10',
        warning: 'bg-orange-50 text-orange-500 border-orange-100',
        error: 'bg-red-50 text-red-500 border-red-100',
        info: 'bg-pace-purple/5 text-pace-purple border-pace-purple/10',
    };

    return (
        <span className={cn(
            "text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-sm border inline-flex items-center",
            variants[variant],
            className
        )}>
            {children}
        </span>
    );
};
