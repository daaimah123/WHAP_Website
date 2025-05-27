import ImageWithFallback from "@/components/ImageWithFallback"

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <section className="whap-page-header">
        <div className="container mx-auto px-4 text-center">
          <h1 className="whap-page-title text-4xl md:text-5xl mb-4">ABOUT WHAP</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our story, our people, and our commitment to community empowerment
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {/* People Section */}
            <div className="space-y-12">
              <h2 className="whap-section-title text-3xl">WHAP PEOPLE</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Board of Directors */}
                <div className="bg-whap-gold-light p-6 rounded-xl border-l-4 border-whap-gold">
                  <h3 className="text-xl font-semibold text-whap-gold mb-4 font-playfair">Board of Directors</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Royce McLemore</li>
                    <li>Jackie Dedrick</li>
                    <li>Mary Morgan</li>
                  </ul>
                </div>

                {/* Staff */}
                <div className="bg-whap-gold-light p-6 rounded-xl border-l-4 border-whap-gold">
                  <h3 className="text-xl font-semibold text-whap-gold mb-4 font-playfair">Staff</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>Royce McLemore, Executive Director</li>
                    <li>Kristie Morris, Administrative Assistant</li>
                    <li>Debi Burton, Administrative Assistant</li>
                    <li>Frankie Perelson, Teacher</li>
                    <li>Christine Jones, Teacher</li>
                    <li>Cheik Fall, Teacher</li>
                    <li>Gordon Cox, Teacher</li>
                    <li>Isaiah Greyson, Tutor</li>
                    <li>David Vaughn, Tutor</li>
                    <li>Mariah Ashby, Tutor</li>
                    <li>Marquel Harris, Finder's Keepers Shop Coordinator</li>
                  </ul>
                </div>

                {/* Volunteers & Supporters */}
                <div className="bg-whap-gold-light p-6 rounded-xl border-l-4 border-whap-gold">
                  <h3 className="text-xl font-semibold text-whap-gold mb-4 font-playfair">Volunteers & Supporters</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Some of our programs and services are made possible in part or entirely by tireless effort of our
                    volunteers, who share our vision for help and community services.
                  </p>
                  <p className="text-gray-700 text-sm">
                    So much needed funding for our programs comes in part from generous support of several Marin
                    organizations, and private individuals. We are fortunate to have understanding and supportive
                    sponsors. And we are ever so grateful to them.
                  </p>
                </div>
              </div>
            </div>

            {/* Awards Section */}
            <div className="bg-whap-gold-light p-8 rounded-2xl border-l-4 border-whap-gold">
              <h2 className="text-3xl font-bold text-whap-gold font-playfair mb-6">WHAP Awards</h2>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900">Marin Women's Hall of Fame</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    In 2006 the founder and Executive Director of Women Helping All People,
                    <strong> Royce McLemore</strong>, was recognized by Marin Community for her social contribution and
                    selfless public work and was inducted into the
                    <a
                      href="https://www.ywcasf-marin.org/marin-womens-hall-fame/honorees/royce-yvonne-mclemore"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-whap-gold hover:text-whap-gold-bright underline ml-1"
                    >
                      Marin Women's Hall of Fame
                    </a>
                    in a category of Social Change.
                  </p>
                </div>
                <div className="relative">
                  <ImageWithFallback
                    src="https://img1.wsimg.com/isteam/ip/72a5d49d-4df8-4f8a-bd5d-844274a8ce99/Screen%20Shot%202022-07-24%20at%206.42.31%20PM.png/:/cr=t:0%25,l:22.58%25,w:66.38%25,h:100%25/rs=w:984,h:740/qt=q:85"
                    alt="Royce McLemore, WHAP Founder"
                    width={500}
                    height={350}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Media Coverage */}
            <div className="space-y-8">
              <h2 className="whap-section-title text-3xl">WHAP in Media and Press</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    source: "Marin IJ",
                    title: "Private Marin City school celebrates 10 years",
                    date: "2010-10-10",
                    url: "http://www.marinij.com/ci_16305817",
                  },
                  {
                    source: "Building Healthy Communities",
                    title: "WHAP's Work in Marin City",
                    date: "2010-03-17",
                    url: "http://buildinghealthycommunities.wordpress.com/2010/03/17/women-helping-all-peoples-work-in-marin-city/",
                  },
                  {
                    source: "VolunteerMarin.org",
                    title: "Information about WHAP",
                    date: "2009-10-26",
                    url: "http://volunteermarin.org/org/1335096.html",
                  },
                  {
                    source: "Marin IJ",
                    title: "Youth leadership camp to begin on June 22",
                    date: "2009-06-14",
                    url: "http://www.marinij.com/ci_12590130",
                  },
                  {
                    source: "San Francisco Chronicle",
                    title: "Marin City school tries new approach",
                    date: "2003-02-28",
                    url: "http://94965schools.blogspot.com/2003/02/marin-city-school-tries-new-approach.html",
                  },
                  {
                    source: "Marin IJ",
                    title: "Marin City firm loses bid on local contract",
                    date: "2009-02-04",
                    url: "http://www.marinij.com/sausalito/ci_11628576",
                  },
                ].map((article, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md border border-whap-gold-light hover:shadow-lg transition-shadow"
                  >
                    <h4 className="font-semibold text-whap-gold mb-2">{article.source}</h4>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-whap-gold hover:text-whap-gold-bright font-medium block mb-2"
                    >
                      {article.title}
                    </a>
                    <span className="text-gray-500 text-sm">[{article.date}]</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
