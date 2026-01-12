"use client";
import { motion } from "framer-motion";
import { clsx} from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export default function ScrollReveal({ children, className, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}
