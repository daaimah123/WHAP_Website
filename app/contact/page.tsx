import ImageWithFallback from "@/components/ImageWithFallback"

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <section className="whap-page-header">
        <div className="container mx-auto px-4 text-center">
          <h1 className="whap-page-title text-4xl md:text-5xl mb-4">CONTACT US</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with WHAP - we're here to help and answer your questions
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-whap-gold font-playfair">WHAP Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-whap-gold-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-whap-gold text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      79 Cole Drive, Suite 5<br />
                      Marin City, CA 94965
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-whap-gold-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-whap-gold text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">(415) 332-1703</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-whap-gold-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-whap-gold text-xl">📠</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Fax</h3>
                    <p className="text-gray-600">(415) 332-1725</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-whap-gold-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-whap-gold text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:whap1990@gmail.com"
                      className="text-whap-gold hover:text-whap-gold-bright transition-colors"
                    >
                      whap1990@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-whap-gold-light p-6 rounded-xl border-l-4 border-whap-gold">
                <h3 className="text-xl font-semibold text-whap-gold mb-4 font-playfair">Office Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Monday - Thursday:</strong> 9:00 AM - 5:00 PM
                  </p>
                  <p>
                    <strong>Friday:</strong> 9:00 AM - 3:00 PM
                  </p>
                  <p>
                    <strong>Saturday - Sunday:</strong> Closed
                  </p>
                </div>
                <p className="text-sm text-gray-600 mt-4">*Hours may vary during holidays and special events</p>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden shadow-lg border border-whap-gold-light">
                <ImageWithFallback
                  src="https://img1.wsimg.com/isteam/ip/72a5d49d-4df8-4f8a-bd5d-844274a8ce99/IMG_6390.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25"
                  alt="WHAP Location in Marin City"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-whap-gold-light">
              <h2 className="text-2xl font-bold text-whap-gold font-playfair mb-6">Send Us a Message</h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-whap-gold focus:border-whap-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-whap-gold focus:border-whap-gold transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-whap-gold focus:border-whap-gold transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-whap-gold focus:border-whap-gold transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-whap-gold focus:border-whap-gold transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="services">Services Information</option>
                    <option value="academy">Academy Enrollment</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="donation">Donation Information</option>
                    <option value="support">Support Request</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-whap-gold focus:border-whap-gold transition-colors resize-vertical"
                    placeholder="Please tell us how we can help you..."
                  ></textarea>
                </div>

                <button type="submit" className="whap-btn whap-btn-primary w-full py-3 px-6 rounded-lg font-semibold">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
