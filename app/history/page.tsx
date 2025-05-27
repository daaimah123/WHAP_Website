import ImageWithFallback from "@/components/ImageWithFallback"

const timelineEvents = [
  {
    year: "1990",
    title: "WHAP Founded",
    description:
      "Mattie Boatman and Royce McLemore gather sixteen Marin City women on Royce's front lawn to form 'Women Helping Women' (WHW), expressing concern for young women in public housing.",
    details: [
      "Original group included Cora Cosio, Suzanne Cooper, Candy Elders, Mary Morgan, Debra Judd, and Lori Fall",
      "Started as a small women's support group",
      "Focus on community's young women in public housing",
    ],
  },
  {
    year: "1992",
    title: "Computer Learning Center Established",
    description:
      "WHAP launches its groundbreaking Computer Learning Center, the first and only Regional Occupational Program providing computer literacy in Southern Marin.",
    details: [
      "First computer literacy program in Southern Marin",
      "Grassroots initiative to empower residents",
      "Focus on job skills and economic empowerment",
    ],
  },
  {
    year: "1995",
    title: "Expansion of Services",
    description:
      "Under Royce McLemore's leadership, Women Helping Women transforms into 'Women Helping All People,' expanding to serve all community members.",
    details: [
      "Name change reflects broader mission",
      "Services expanded beyond women to all community members",
      "Partnership development with local agencies",
    ],
  },
  {
    year: "2000",
    title: "WHAP Scholastic Academy Opens",
    description:
      "WHAP establishes its private school for children Kindergarten through 8th grade, founded on Christian principles and academic excellence.",
    details: [
      "Private school serving K-8 students",
      "Christian-based educational philosophy",
      "Small class sizes and individualized attention",
    ],
  },
  {
    year: "2006",
    title: "Founder Honored",
    description:
      "Royce McLemore is inducted into the Marin Women's Hall of Fame in the category of Social Change, recognizing her transformative community work.",
    details: [
      "Recognition for social contribution and public service",
      "Marin Community acknowledgment",
      "Hall of Fame induction ceremony",
    ],
  },
  {
    year: "2010",
    title: "Academy 10th Anniversary",
    description:
      "WHAP Scholastic Academy celebrates its 10th anniversary, having educated hundreds of students and established itself as a cornerstone of community education.",
    details: [
      "Decade of educational excellence",
      "Hundreds of students graduated",
      "Community celebration and recognition",
    ],
  },
  {
    year: "2020",
    title: "30 Years of Service",
    description:
      "WHAP marks three decades of community service, adapting programs to meet evolving needs while maintaining core mission of empowerment and education.",
    details: [
      "30 years of continuous community service",
      "Program adaptation and evolution",
      "Sustained community impact",
    ],
  },
  {
    year: "2024",
    title: "Continued Growth",
    description:
      "WHAP continues to expand services and impact, serving over 1000 families and maintaining its position as a vital community resource center.",
    details: ["Over 1000 families served", "Expanded program offerings", "Continued community leadership"],
  },
]

export default function HistoryPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <section className="whap-page-header">
        <div className="container mx-auto px-4 text-center">
          <h1 className="whap-page-title text-4xl md:text-5xl mb-4">OUR HISTORY</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From sixteen women on a front lawn to a vital community institution - the WHAP story of transformation and
            impact
          </p>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="whap-card-header text-3xl">The Beginning (1990)</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                WHAP began in 1990 with the vision and driving effort of <strong>Mattie Boatman</strong> and
                <strong> Royce McLemore</strong>. It started with sixteen Marin City women gathering on Royce's front
                lawn to express their concern for the life of the community's young women who lived in public housing.
              </p>
              <p className="text-gray-600 leading-relaxed">
                What followed was the formation of a small Women Support Group called "Women Helping Women" (WHW). Among
                the women in the group were Cora Cosio, Suzanne Cooper, Candy Elders, Mary Morgan, Debra Judd, and Lori
                Fall, to name just a few.
              </p>
              <div className="whap-info-box bg-whap-gold-light">
                <h4 className="font-bold text-whap-gold mb-2">Founding Vision</h4>
                <p className="text-gray-700 italic">
                  "We believed that no one should face life's challenges alone, and that together we could create
                  lasting change in our community."
                </p>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://img1.wsimg.com/isteam/ip/72a5d49d-4df8-4f8a-bd5d-844274a8ce99/Screen%20Shot%202022-07-24%20at%206.42.31%20PM.png/:/cr=t:0%25,l:22.58%25,w:66.38%25,h:100%25/rs=w:984,h:740/qt=q:85"
                alt="Royce McLemore, WHAP Founder"
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-whap-light">
        <div className="container mx-auto px-4">
          <h2 className="whap-section-title text-3xl mb-16">Timeline of Growth and Impact</h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-whap-gold transform -translate-x-1/2"></div>

            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center md:items-start mb-16 timeline-item ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-0 w-6 h-6 bg-whap-gold-bright rounded-full border-4 border-white transform -translate-x-1/2 z-10"></div>

                {/* Content */}
                <div
                  className={`mt-8 md:mt-0 md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                  }`}
                >
                  <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-whap-gold">
                    <span className="inline-block px-3 py-1 bg-whap-gold-bright text-gray-900 rounded-full text-sm font-bold mb-2">
                      {event.year}
                    </span>
                    <h3 className="text-xl font-bold text-whap-gold font-playfair mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {event.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-whap-gold mr-2">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="whap-card-header text-3xl">Our Continuing Legacy</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              From those humble beginnings on a front lawn to becoming a cornerstone of the Marin County community, WHAP
              has remained true to its founding vision: that no one should face life's challenges alone. Today, we
              continue to evolve and expand our services to meet the changing needs of our community while staying
              rooted in the values of compassion, empowerment, and collective support that our founders established over
              three decades ago.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-whap-gold-light p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-whap-gold font-playfair mb-2 stat-number">34+</div>
                <div className="text-gray-700 font-medium">Years of Service</div>
              </div>
              <div className="bg-whap-gold-light p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-whap-gold font-playfair mb-2 stat-number">1000+</div>
                <div className="text-gray-700 font-medium">Families Impacted</div>
              </div>
              <div className="bg-whap-gold-light p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-whap-gold font-playfair mb-2 stat-number">8</div>
                <div className="text-gray-700 font-medium">Core Programs</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
