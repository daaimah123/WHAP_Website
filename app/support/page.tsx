import ImageWithFallback from "@/components/ImageWithFallback"

export default function SupportPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <section className="whap-page-header">
        <div className="container mx-auto px-4 text-center">
          <h1 className="whap-page-title text-4xl md:text-5xl mb-4">SUPPORT OUR MISSION</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us continue empowering the Marin County community through your generous support
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Donate */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-whap-gold-light text-center">
              <div className="w-16 h-16 bg-whap-gold-light rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-whap-gold text-2xl">💝</span>
              </div>
              <h3 className="text-2xl font-bold text-whap-gold font-playfair mb-4">Make a Donation</h3>
              <p className="text-gray-600 mb-6">
                Your financial contribution directly supports our programs and helps us serve more families in need.
              </p>
              <button className="whap-btn whap-btn-primary w-full">Donate Now</button>
            </div>

            {/* Volunteer */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-whap-gold-light text-center">
              <div className="w-16 h-16 bg-whap-gold-light rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-whap-gold text-2xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-whap-gold font-playfair mb-4">Volunteer</h3>
              <p className="text-gray-600 mb-6">
                Share your time and skills to make a direct impact in the lives of community members.
              </p>
              <button className="whap-btn whap-btn-primary w-full">Get Involved</button>
            </div>

            {/* Partner */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-whap-gold-light text-center">
              <div className="w-16 h-16 bg-whap-gold-light rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-whap-gold text-2xl">🏢</span>
              </div>
              <h3 className="text-2xl font-bold text-whap-gold font-playfair mb-4">Corporate Partnership</h3>
              <p className="text-gray-600 mb-6">
                Partner with us to create lasting change and demonstrate your commitment to community development.
              </p>
              <button className="whap-btn whap-btn-primary w-full">Learn More</button>
            </div>
          </div>

          {/* Impact of Support */}
          <div className="bg-whap-gold-light p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-whap-gold font-playfair mb-8 text-center">Your Impact</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-whap-gold font-playfair stat-number">$50</div>
                <p className="text-gray-700">Provides school supplies for 5 students</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-whap-gold font-playfair stat-number">$100</div>
                <p className="text-gray-700">Funds one month of after-school snacks</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-whap-gold font-playfair stat-number">$250</div>
                <p className="text-gray-700">Supports computer literacy training for one student</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-whap-gold font-playfair stat-number">$500</div>
                <p className="text-gray-700">Helps a family with emergency housing assistance</p>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-16 bg-white p-8 rounded-xl shadow-lg border border-whap-gold-light">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-whap-gold font-playfair mb-4">Why Your Support Matters</h3>
                <p className="text-gray-600 mb-4 italic">
                  "WHAP has been a lifeline for our family. The after-school program has helped my children improve
                  their grades, and the emergency assistance program helped us keep our home during a difficult time.
                  Your support makes stories like ours possible."
                </p>
                <p className="text-gray-700 font-medium">- Marin City Parent</p>
              </div>
              <div className="relative">
                <ImageWithFallback
                  src="https://whapmc.org/wp-content/uploads/2023/03/Golden-Gate-Village-1024x683.jpg"
                  alt="Golden Gate Village community"
                  width={500}
                  height={350}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
