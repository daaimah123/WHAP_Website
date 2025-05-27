export default function MissionOverview() {
  return (
    <section className="whap-mission">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="whap-section-title text-3xl md:text-4xl mb-12">OUR MISSION AND ORGANIZATIONAL OVERVIEW</h2>

          <div className="whap-mission-content">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div>
                  <h3 className="whap-card-header text-2xl mb-4">Our Mission</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Women Helping All People (WHAP) is a non-profit social service organization that has been providing
                    quality programs to the Marin County community of Marin City since 1990. The mission of WHAP is to
                    empower low-income and underprivileged residents of Marin County with information, resources,
                    support services, and educational opportunities so that they can acquire job skills, develop
                    self-esteem, and reach economic self-sufficiency.
                  </p>
                </div>

                <div>
                  <h3 className="whap-card-header text-2xl mb-4">Our Approach</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We believe in a holistic approach to community development that addresses the interconnected needs
                    of individuals and families. Our programs are designed to build capacity, foster independence, and
                    create pathways to success for all community members.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="whap-card-header text-2xl mb-4">Core Values</h3>
                  <ul className="space-y-4">
                    {[
                      "Empowerment through education and skill development",
                      "Dignity and respect for all community members",
                      "Collaborative partnerships with local organizations",
                      "Sustainable solutions for long-term community growth",
                      "Cultural sensitivity and inclusive programming",
                    ].map((value, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-whap-gold-bright mr-3 mt-1 text-xl">★</span>
                        <span className="text-gray-700">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-whap-light p-6 rounded-xl border-l-4 border-whap-gold">
                  <h4 className="font-bold text-gray-900 mb-3">Our Impact Since 1990</h4>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="whap-stat-number text-whap-gold">1000+</div>
                      <div className="text-sm text-gray-600">Families Served</div>
                    </div>
                    <div>
                      <div className="whap-stat-number text-whap-gold">500+</div>
                      <div className="text-sm text-gray-600">Students Educated</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
