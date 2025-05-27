import ImageWithFallback from "@/components/ImageWithFallback"

export default function NewsPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <section className="whap-page-header">
        <div className="container mx-auto px-4 text-center">
          <h1 className="whap-page-title text-4xl md:text-5xl mb-4">NEWS & EVENTS</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, events, and achievements from WHAP
          </p>
        </div>
      </section>

      {/* News Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {/* Latest News */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-whap-gold-light">
              <h2 className="text-2xl font-bold text-whap-gold font-playfair mb-4">
                WHAP Academy Celebrates 24 Years of Excellence
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-600 mb-4">
                    <strong>October 2024</strong> - WHAP Scholastic Academy continues to provide quality education to
                    children in Marin City, celebrating over two decades of academic excellence and community impact.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Since opening in 2000, our academy has graduated hundreds of students who have gone on to succeed in
                    high school and beyond. We remain committed to our founding principles of providing quality
                    education with Christian values in a nurturing environment.
                  </p>
                </div>
                <div className="relative">
                  <ImageWithFallback
                    src="https://github.com/daaimah123/WHAP_Website/blob/main/images/whapsa5.jpg?raw=true"
                    alt="WHAP Scholastic Academy students"
                    width={500}
                    height={350}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-whap-gold-light p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-whap-gold font-playfair mb-6">Upcoming Events</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-whap-gold pl-6">
                  <h3 className="text-xl font-semibold text-gray-900">Community Thanksgiving Dinner</h3>
                  <p className="text-gray-600">November 28, 2024 • 5:00 PM - 8:00 PM</p>
                  <p className="text-gray-700">
                    Join us for our annual community Thanksgiving dinner. Free for all community members.
                  </p>
                </div>
                <div className="border-l-4 border-whap-gold pl-6">
                  <h3 className="text-xl font-semibold text-gray-900">Holiday Toy Drive</h3>
                  <p className="text-gray-600">December 1-20, 2024</p>
                  <p className="text-gray-700">
                    Help us collect toys for local families. Drop-off locations available at our main office.
                  </p>
                </div>
                <div className="border-l-4 border-whap-gold pl-6">
                  <h3 className="text-xl font-semibold text-gray-900">New Year Community Meeting</h3>
                  <p className="text-gray-600">January 15, 2025 • 6:00 PM - 7:30 PM</p>
                  <p className="text-gray-700">Community input session for 2025 programming and initiatives.</p>
                </div>
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-whap-gold-light p-6 rounded-xl border-l-4 border-whap-gold">
                <h3 className="text-xl font-bold text-whap-gold font-playfair mb-4">Recent Achievements</h3>
                <ul className="whap-program-details">
                  <li>Served over 150 families through our emergency assistance program in 2024</li>
                  <li>Graduated 25 students from our computer literacy program</li>
                  <li>Expanded our after-school program to serve 75 students daily</li>
                </ul>
              </div>

              <div className="bg-whap-gold-light p-6 rounded-xl border-l-4 border-whap-gold">
                <h3 className="text-xl font-bold text-whap-gold font-playfair mb-4">In the Media</h3>
                <div className="space-y-3">
                  <a href="#" className="block text-whap-gold hover:text-whap-gold-bright font-medium">
                    "WHAP Continues Community Impact After 34 Years"
                  </a>
                  <p className="text-sm text-gray-600">Marin Independent Journal - September 2024</p>
                </div>
              </div>
            </div>

            {/* Community Gallery */}
            <div className="space-y-8">
              <h2 className="whap-section-title text-3xl">Community Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <ImageWithFallback
                  src="https://img1.wsimg.com/isteam/ip/72a5d49d-4df8-4f8a-bd5d-844274a8ce99/whap%202-0001.jpeg/:/"
                  alt="WHAP Academy students"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105"
                />
                <ImageWithFallback
                  src="https://img1.wsimg.com/isteam/ip/72a5d49d-4df8-4f8a-bd5d-844274a8ce99/A85F4E7D-5278-462C-A467-50CC4C22C7E2.JPG/:/"
                  alt="Outdoor Field Trip with Counselor"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105"
                />
                <ImageWithFallback
                  src="https://img1.wsimg.com/isteam/ip/72a5d49d-4df8-4f8a-bd5d-844274a8ce99/294723518_2225429687595446_6588070233138961034.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:1547"
                  alt="Golden Gate Village"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105"
                />
                <ImageWithFallback
                  src="https://img1.wsimg.com/isteam/ip/72a5d49d-4df8-4f8a-bd5d-844274a8ce99/295944023_366379272335774_3006423279962405678_.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:870"
                  alt="Marin City"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
