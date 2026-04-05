export default function PageHero({ title, subtitle }) {
    return (
        <div className="bg-primary-container text-white pt-48 pb-24 lg:pt-60 lg:pb-32 relative overflow-hidden">
            {/* Structural glow and grain */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[150px] rounded-full pointer-events-none translate-x-1/3"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center lg:text-left">
                <h1 className="text-4xl lg:text-6xl font-semibold mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-white/70 text-lg lg:text-xl max-w-2xl leading-relaxed font-normal animate-in fade-in slide-in-from-bottom-2 delay-150 duration-700">
                        {subtitle}
                    </p>
                )}
            </div>
            
            {/* Bottom edge transition */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-white/5"></div>
        </div>
    );
}
