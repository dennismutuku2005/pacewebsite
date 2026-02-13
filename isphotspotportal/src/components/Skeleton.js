import React from 'react';
import { cn } from '@/lib/utils';

export const Skeleton = ({ className }) => (
    <div className={cn("shimmer-wrapper rounded", className)}></div>
);

export const CardSkeleton = () => (
    <div className="bg-white border border-pace-border rounded p-5 flex flex-col justify-between">
        <div className="flex justify-between items-start mb-4">
            <Skeleton className="w-10 h-10" />
            <Skeleton className="h-4 w-12" />
        </div>
        <div>
            <Skeleton className="h-3 w-16 mb-2" />
            <Skeleton className="h-7 w-24 mb-2" />
            <Skeleton className="h-3 w-20" />
        </div>
    </div>
);
