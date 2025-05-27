import Link from "next/link"

const services = [
  {
    id: "safehouse",
    title: 'After-School "Safe House" Tutorial Program',
    description:
      "Safe house tutorial program for students K-12, emphasizing work with children who are one or more grade levels behind in two or more subject areas.",
    icon: "📚",
    href: "/services#safehouse",
  },
  {
    id: "academy",
    title: "WHAP Scholastic Academy",
    description:
      "Private school for children in Kindergarten through 8th grade, providing quality education with Christian principles and values.",
    icon: "🏫",
    href: "/education",
  },
  {
    id: "computer-center",
    title: "Computer Learning Center",
    description:
      "Free computer literacy and business office technology classes designed to meet the needs of the disadvantaged.",
    icon: "💻",
    href: "/services#computer-center",
  },
  {
    id: "finders-keepers",
    title: "Finders Keepers Shop",
    description:
      "Free give-away shop for clothing and household goods, serving community members in need of essential items.",
    icon: "🛍️",
    href: "/services#finders-keepers",
  },
  {
    id: "advocacy",
    title: "Golden Gate Village Resident Advocacy",
    description:
      "Advocacy services for residents of Golden Gate Village, helping with housing issues and community concerns.",
    icon: "🏘️",
    href: "/services#advocacy",
  },
  {
    id: "emergency-needs",
    title: "Family & Emergency Critical Needs Program",
    description:
      "Emergency assistance for families facing critical needs including housing, utilities, and basic necessities.",
    icon: "🆘",
    href: "/services#emergency-needs",
  },
  {
    id: "environmental",
    title: "Environmental Leadership Internship Program",
    description:
      "Youth internship program focused on environmental leadership and community sustainability initiatives.",
    icon: "🌱",
    href: "/services#environmental",
  },
  {
    id: "children-computers",
    title: "Children's Computer Classes",
    description: "Interactive computer classes for children using educational games and software-driven curriculum.",
    icon: "🎮",
    href: "/services#children-computers",
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-whap-light">
      <div className="container mx-auto px-4">
        <h2 className="whap-section-title text-3xl md:text-4xl mb-12">OUR CORE PROGRAMS & SERVICES</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-16">
          Comprehensive support services designed to empower individuals and strengthen our community
        </p>

        <div className="whap-services-grid">
          {services.map((service) => (
            <div key={service.id} className="whap-service-card service-card">
              <div className="whap-service-icon">{service.icon}</div>
              <h3 className="whap-service-title">{service.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
              <Link href={service.href} className="whap-btn whap-btn-secondary">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
