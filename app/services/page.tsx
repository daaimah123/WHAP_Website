import ImageWithFallback from "@/components/ImageWithFallback"

const services = [
  {
    id: "safehouse",
    title: 'After-School "Safe House" Tutorial Program',
    description:
      "This in- and after-school tutorial program serves students in grades Kindergarten through high school and emphasizes work with children who are one or more grade levels behind, in two or more subject areas.",
    schedule: "Monday-Thursday, 3:00 PM - 6:00 PM (except holidays)",
    details: [
      "Serves students K-12 with academic challenges",
      "Focus on students 1+ grade levels behind in 2+ subjects",
      "Light snacks provided during tutoring sessions",
      "Experienced, enthusiastic, and friendly tutors",
      "Homework completion support",
      "Individual and small group instruction",
    ],
    eligibility: "Open to all students in need of academic support",
    cost: "Free of charge",
    enrollment: "Contact WHAP office for enrollment information",
    image: "https://img1.wsimg.com/isteam/ip/72a5d49d-4df8-4f8a-bd5d-844274a8ce99/295317870_7802827466456434_4510816109404439381.jpg/:/cr=t:26.56%25,l:0%25,w:100%25,h:66.67%25/rs=w:776,h:388,cg:true",
  },
  {
    id: "computer-center",
    title: "Computer Learning Center (BOT/ROP)",
    description:
      'This free program, started in 1992, aimed at empowering Marin City residents to make positive changes in their lives. This originally a grassroots program is the only Regional Occupational Program that provides "Computer Literacy" and "Business Office Technology" classes in Southern Marin.',
    schedule: "Classes: Tuesday & Thursday 10:00 AM - 12:00 PM | Lab Practice: Monday & Wednesday",
    details: [
      "Computer literacy training from basic to advanced",
      "Business office technology certification",
      "Microsoft Office Suite training",
      "Internet and email skills",
      "Job readiness and resume building",
      "Accessible to individuals with disabilities",
    ],
    eligibility: "Adults seeking computer skills for employment",
    cost: "Free of charge",
    enrollment: "Open enrollment - contact office to register",
    image: "https://img1.wsimg.com/isteam/ip/72a5d49d-4df8-4f8a-bd5d-844274a8ce99/295467460_806583047371878_4997788922062889149_.jpg/:/rs=w:719,h:536",
  },
  {
    id: "children-computers",
    title: "Children's Computer Classes",
    description:
      "This program uses interactive computer media (including games), and software-driven curriculum which minimizes the need for hands-on instruction and offers youth recreational and educational alternatives.",
    schedule: "Various times throughout the week",
    details: [
      "Interactive educational computer games",
      "Age-appropriate software curriculum",
      "Drug resistance education components",
      "Self-esteem and confidence building",
      "Career preparation and goal setting",
      "Safe, supervised environment",
    ],
    eligibility: "Children and youth ages 6-17",
    cost: "Free of charge",
    enrollment: "Registration required - contact WHAP",
    image: "https://img1.wsimg.com/isteam/ip/72a5d49d-4df8-4f8a-bd5d-844274a8ce99/295633013_770522124372555_4780406685958460157_.jpg/:/rs=w:1160,h:870",
  },
  {
    id: "finders-keepers",
    title: "Finders Keepers Shop",
    description:
      "This is a free give-away shop for clothing and household goods, serving community members in need of essential items. The shop provides dignity and choice to families by offering quality items at no cost.",
    schedule: "Tuesday, Wednesday, Friday 10:00 AM - 3:00 PM",
    details: [
      "Free clothing for all ages and sizes",
      "Household goods and kitchen items",
      "Children's toys and books",
      "Seasonal items and holiday decorations",
      "Dignified shopping experience",
      "Community donations accepted",
    ],
    eligibility: "Open to all community members in need",
    cost: "Free of charge",
    enrollment: "No registration required - walk-in basis",
    image: "https://img1.wsimg.com/isteam/ip/72a5d49d-4df8-4f8a-bd5d-844274a8ce99/295317870_7802827466456434_4510816109404439381.jpg/:/cr=t:26.56%25,l:0%25,w:100%25,h:66.67%25/rs=w:776,h:388,cg:true",
  },
  {
    id: "advocacy",
    title: "Golden Gate Village Resident Advocacy",
    description:
      "Comprehensive advocacy services for residents of Golden Gate Village, helping with housing issues, tenant rights, and community concerns through direct intervention and education.",
    schedule: "By appointment and as needed",
    details: [
      "Housing maintenance issue resolution",
      "Tenant rights education and enforcement",
      "Mediation with housing authorities",
      "Community organizing and empowerment",
      "Individual case advocacy and support",
      "Resource referrals and connections",
    ],
    eligibility: "Golden Gate Village residents and broader community",
    cost: "Free of charge",
    enrollment: "Contact WHAP for advocacy support",
    image: "https://img1.wsimg.com/isteam/ip/72a5d49d-4df8-4f8a-bd5d-844274a8ce99/blob-0001.png/:/rs=w:719,h:536",
  },
  {
    id: "emergency-needs",
    title: "Family & Emergency Critical Needs Program",
    description:
      'Emergency assistance for families facing critical needs including housing, utilities, food, and basic necessities. We are a recognized agency of Southern Marin for Housing, Rental and Critical Family Needs help, referrals, and counseling (a collaboration effort with "Community Action of Marin" organization).',
    schedule: "Emergency services available during office hours",
    details: [
      "Emergency rental and utility assistance",
      "Food assistance and referrals",
      "Crisis intervention and counseling",
      "Referrals to other community agencies",
      "Case management services",
      "Follow-up support and planning",
    ],
    eligibility: "Low-income families and individuals in crisis",
    cost: "Free services, assistance based on availability of funds",
    enrollment: "Contact office immediately for emergency needs",
    image: "https://img1.wsimg.com/isteam/ip/72a5d49d-4df8-4f8a-bd5d-844274a8ce99/blob-0002.png/:/",
  },
  {
    id: "environmental",
    title: "Environmental Leadership Internship Program",
    description:
      "Youth internship program focused on environmental leadership and community sustainability initiatives, engaging young people in environmental stewardship and justice.",
    schedule: "Summer program with year-round activities",
    details: [
      "Environmental education and awareness",
      "Hands-on sustainability projects",
      "Leadership development training",
      "Community garden initiatives",
      "Environmental justice advocacy",
      "Paid internship opportunities",
    ],
    eligibility: "Youth ages 14-24 interested in environmental issues",
    cost: "Free participation, stipends available",
    enrollment: "Application process in spring for summer program",
    image: "https://img1.wsimg.com/isteam/ip/72a5d49d-4df8-4f8a-bd5d-844274a8ce99/010B8118-D9A9-40F2-B4AB-5EB2D2932286.JPG/:/cr=t:0.74%25,l:6.64%25,w:84.75%25,h:84.75%25",
  },
  {
    id: "esl-ged",
    title: "GED/ESL Literacy Classes",
    description:
      "The GED/ESL Literacy Class, in cooperation with Marin Literacy Council, provides tutors to teach English to residents who don't speak English. Vietnamese residents of Marin City have benefited greatly from this program.",
    schedule: "Flexible scheduling based on student needs",
    details: [
      "English as Second Language instruction",
      "GED test preparation and support",
      "Individual and group classes available",
      "Culturally sensitive instruction methods",
      "Flexible scheduling for working adults",
      "Connection to additional educational resources",
    ],
    eligibility: "Adults needing English language or GED support",
    cost: "Free of charge",
    enrollment: "Assessment and placement available",
    image: "https://img1.wsimg.com/isteam/ip/72a5d49d-4df8-4f8a-bd5d-844274a8ce99/98.jpeg/:/cr=t:0%25,l:1.57%25,w:96.85%25,h:100%25/rs=w:400,h:300.7518796992481,cg:true/fx-gs",
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <section className="whap-page-header">
        <div className="container mx-auto px-4 text-center">
          <h1 className="whap-page-title text-4xl md:text-5xl mb-4">PROGRAMS & SERVICES</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support services designed to empower individuals and strengthen our community through
            education, advocacy, and direct assistance.
          </p>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-start service-detail-card ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <h2 className="whap-card-header text-3xl">{service.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>

                  {/* Schedule */}
                  <div className="whap-info-box">
                    <h4 className="font-semibold text-gray-900 mb-2">📅 Schedule:</h4>
                    <p className="text-gray-700">{service.schedule}</p>
                  </div>

                  {/* Program Details */}
                  <div className="whap-info-box bg-whap-gold-light">
                    <h4 className="font-semibold text-gray-900 mb-3">Program Features:</h4>
                    <ul className="whap-program-details">
                      {service.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Enrollment Info */}
                  <div className="whap-enrollment-info">
                    <div className="whap-enrollment-item">
                      <h5 className="font-semibold text-gray-900 mb-1">Eligibility</h5>
                      <p className="text-sm text-gray-700">{service.eligibility}</p>
                    </div>
                    <div className="whap-enrollment-item">
                      <h5 className="font-semibold text-gray-900 mb-1">Cost</h5>
                      <p className="text-sm text-gray-700">{service.cost}</p>
                    </div>
                    <div className="whap-enrollment-item">
                      <h5 className="font-semibold text-gray-900 mb-1">Enrollment</h5>
                      <p className="text-sm text-gray-700">{service.enrollment}</p>
                    </div>
                  </div>
                </div>

                <div className={`relative ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    width={500}
                    height={400}
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-20 bg-whap-gold text-white p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold font-playfair mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6">Contact us today to learn more about our programs or to begin enrollment.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:415-332-1703" className="whap-btn whap-btn-white">
                Call (415) 332-1703
              </a>
              <a
                href="mailto:whap1990@gmail.com"
                className="whap-btn whap-btn-secondary border-white text-white hover:bg-white hover:text-whap-gold"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
