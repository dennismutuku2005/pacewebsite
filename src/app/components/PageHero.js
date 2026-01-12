export default function PageHero({ title, subtitle }) {
    return (
        <div className="bg-tappi-purple text-white pt-36 pb-20 relative overflow-hidden">
            {/* Background decorations matching the main hero feel */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-600/20 blur-[100px] rounded-full pointer-events-none transform translate-x-1/3"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center lg:text-left relative z-10">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-rubik tracking-tight leading-tight">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-purple-200 text-lg lg:text-xl max-w-2xl leading-relaxed font-light">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
}
