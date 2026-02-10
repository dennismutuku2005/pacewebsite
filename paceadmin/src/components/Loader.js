import React from 'react';
import { Loader2 } from 'lucide-react';

export const Spinner = ({ size = 16, className = "" }) => (
    <Loader2 size={size} className={`animate-spin ${className}`} />
);

export const LoadingButton = ({ isLoading, children, loadingText, className = "", ...props }) => (
    <button
        {...props}
        disabled={isLoading || props.disabled}
        className={`flex items-center justify-center gap-2 ${className}`}
    >
        {isLoading && <Spinner size={16} />}
        {isLoading ? (loadingText || children) : children}
    </button>
);
