import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="whap-hero">
      {/* Hero Image Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://sjc.microlink.io/JiuazTyFpL0UUPBCipDTuVn-P0ZO12WHy_7o7-T_4UHd1lTpYzAjQV-tl_LsgiTD5kLxRkN_nJx5s7fMU1yC7A.jpeg"
          alt="Royce McLemore, WHAP Founder, standing in front of Golden Gate Village"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 text-white">
        <div className="max-w-4xl">
          <h1 className="whap-hero-title text-4xl md:text-6xl lg:text-7xl mb-6">
            WOMEN HELPING
            <br />
            <span className="text-whap-gold-bright">ALL PEOPLE</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl">
            Empowering low-income and underprivileged residents of Marin County with information, resources, support
            services, and educational opportunities since 1990.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/services" className="whap-btn whap-btn-primary text-lg px-8 py-4">
              Our Programs
            </Link>
            <Link href="/support" className="whap-btn whap-btn-white text-lg px-8 py-4">
              Support Our Mission
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
