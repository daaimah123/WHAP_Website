import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="whap-cta">
      <div className="container mx-auto px-4">
        <h2 className="whap-cta-title text-3xl md:text-4xl mb-6">Join Us in Making a Difference</h2>
        <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
          Your support helps us continue providing essential services to the Marin County community. Every contribution
          makes a meaningful impact in someone's life.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/support" className="whap-btn whap-btn-white text-lg px-8 py-4">
            Donate Now
          </Link>
          <Link
            href="/contact"
            className="whap-btn whap-btn-secondary text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-whap-gold"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  )
}
