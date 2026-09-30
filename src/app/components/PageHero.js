export default function PageHero({ title, subtitle, badge }) {
    return (
        <div className="bg-[#08090E] text-white pt-36 pb-20 lg:pt-44 lg:pb-24 relative overflow-hidden font-inter border-b border-white/[0.06]">
            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(139,92,246,0.18),transparent_70%)]" />
            <div className="pointer-events-none absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px]" />
            <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/8 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center lg:text-left">
                {badge && (
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10">
                        {badge}
                    </span>
                )}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-5 tracking-tight text-white leading-tight">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-slate-300/85 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
}
