"use client"
import Link from 'next/link';
import PartnersMarquee from './components/PartnersMarquee';
import ScrollReveal from './components/ScrollReveal';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-rubik overflow-x-hidden selection:bg-tappi-orange-mid selection:text-white">

      {/* Hero Section */}
      <div className="bg-tappi-purple text-white relative">
        <main className="max-w-7xl mx-auto px-6 lg:px-8 pt-9 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

            {/* Left Content */}
            <ScrollReveal className="flex-1 max-w-2xl text-center lg:text-left z-10 w-full">
              <h1 className="text-4xl lg:text-[4.5rem] font-bold leading-[1.1] mb-6 font-rubik tracking-tight">
                Find Customers <br />
                <span className="text-gradient-orange inline-block transform hover:scale-105 transition-transform duration-300">Retain</span> With <br />
                Ease
              </h1>

              <p className="text-lg text-purple-100/80 mb-8 max-w-lg mx-auto lg:mx-0 font-rubik leading-relaxed font-light">
                Providing tools for businesses to increase sales, find new customers and build relationships with them.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button className="w-full sm:w-auto bg-tappi-green text-white px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-green-600 transition-all hover:-translate-y-1 shadow-[0_8px_30px_rgba(44,179,74,0.3)] flex items-center justify-center gap-2">
                 Get on Android
                </button>
                <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-lg border border-white/20 hover:bg-white/5 transition-all hover:border-white/40 flex items-center justify-center gap-2">
                  Available on M-PESA
                </button>
              </div>
            </ScrollReveal>

            {/* Right Mockup (SVG) */}
            <ScrollReveal delay={0.2} className="flex-1 w-full flex justify-center lg:justify-end relative mt-8 lg:mt-0 perspective-[2000px]">
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-600/30 blur-[80px] rounded-full pointer-events-none"></div>

              <div className="relative z-10 transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 ease-out">
                {/* 
                  Using similar image source as before. 
                  In a real scenario, I would ensure this matches the phone mockup exactly.
                */}
                <img
                  src="/hero-phone.png"
                  alt="Tappi App Dashboard"
                  className="w-full h-[60vh] md:h-[100vh] drop-shadow-2xl"
                />
              </div>
            </ScrollReveal>
          </div>
        </main>
      </div>

      {/* Partners Marquee */}
      <PartnersMarquee />

      {/* Social Proof - Stats */}
      <section className="bg-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5 tracking-tight">
              Bring Your Business Closer <br /> To Your Customers
            </h2>
            <p className="text-gray-500 max-w-3xl mx-auto text-center mb-14 text-lg">
              With Tappi, we have been able to satisfy over <span className="font-bold text-gray-900">10M consumers</span>, power over <span className="font-bold text-gray-900">100k businesses</span> and have captured <span className="font-bold text-gray-900">4M reviews</span> from customers.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <ScrollReveal delay={0.1} className="p-6 rounded-3xl bg-white hover:shadow-xl transition-shadow duration-300 border border-gray-100 group text-left">
              <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-tappi-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Get Discovered</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Sign up & automatically get a <span className="text-tappi-purple font-semibold">free website</span> for your business.
              </p>
            </ScrollReveal>

            {/* Card 2 */}
            <ScrollReveal delay={0.2} className="p-6 rounded-3xl bg-white hover:shadow-xl transition-shadow duration-300 border border-gray-100 group text-left">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Find customers</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Advertise on social media by creating simple, affordable and effective ads.
              </p>
            </ScrollReveal>

            {/* Card 3 */}
            <ScrollReveal delay={0.3} className="p-6 rounded-3xl bg-white hover:shadow-xl transition-shadow duration-300 border border-gray-100 group text-left">
              <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Convert Customers</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Build your customer profiles from every interaction in one place.
              </p>
            </ScrollReveal>

            {/* Card 4 */}
            <ScrollReveal delay={0.4} className="p-6 rounded-3xl bg-white hover:shadow-xl transition-shadow duration-300 border border-gray-100 group text-left">
              <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Get Reviews</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Build your online reputation and gather feedback securely.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="bg-tappi-purple py-20 relative overflow-hidden">
        <ScrollReveal className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight text-white">
                Download the <br />
                Tappi app & get <br />
                started now!
              </h2>
              <p className="text-purple-200 text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Get tools to grow your business' online presence while optimizing your customers' experiences at every touch point.
              </p>

              <button className="bg-gradient-to-r from-tappi-orange-start to-tappi-orange-end text-white px-8 py-3.5 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all hover:-translate-y-1 flex items-center gap-2 mx-auto lg:mx-0">
                Download Tappi
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>

            <div className="flex-1 w-full max-w-[280px] lg:max-w-xs relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 blur-[60px] rounded-full"></div>
              <img
                src="/download-phone.svg"
                alt="Tappi App Features"
                className="w-full relative z-10 drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}