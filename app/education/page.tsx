import ImageWithFallback from "@/components/ImageWithFallback"

export default function EducationPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <section className="whap-page-header">
        <div className="container mx-auto px-4 text-center">
          <h1 className="whap-page-title text-4xl md:text-5xl mb-4">WHAP SCHOLASTIC ACADEMY</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quality education with Christian principles for children Kindergarten through 8th grade
          </p>
        </div>
      </section>

      {/* Academy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {/* Philosophy */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-whap-gold font-playfair">Our Philosophy</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Women Helping All People (WHAP) Scholastic Academy was established in 2000. Founding philosophy of the
                  Academy is based on Christian principles, and the belief that when these principles are put at the
                  foundation of education, the result is knowledge that educates and informs the whole person,
                  spiritually and intellectually.
                </p>
              </div>
              <div className="relative">
                <ImageWithFallback
                  src="https://img1.wsimg.com/isteam/ip/72a5d49d-4df8-4f8a-bd5d-844274a8ce99/295346203_1733043820370622_7114233961062243489.jpg/:/rs=w:1160,h:870"
                  alt="WHAP Academy students in classroom"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Mission */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative lg:order-1">
                <ImageWithFallback
                  src="https://github.com/daaimah123/WHAP_Website/blob/main/images/whapsa.jpg?raw=true"
                  alt="Marin City community"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div className="space-y-6 lg:order-2">
                <h2 className="text-3xl font-bold text-whap-gold font-playfair">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  WHAP Scholastic Academy's mission is to develop our children's young minds so that they may become
                  successful scholars, who display a strong sense of self-worth, purpose and community responsibility.
                  We provide a loving, nurturing and supportive environment that enables our students to strive for
                  excellence and to become "Godly" leaders of tomorrow.
                </p>
              </div>
            </div>

            {/* Objectives */}
            <div className="bg-whap-gold-light p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-whap-gold font-playfair mb-8 text-center">Our Objectives</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Promote literacy",
                  "Foster student wellness and safety",
                  "Address the needs of students",
                  "Provide access to quality education for underprivileged children",
                  "Prepare children to be leaders of tomorrow",
                  "Integrate Christian values and character development",
                ].map((objective, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-whap-gold text-xl">✓</span>
                    <span className="text-gray-700 font-medium">{objective}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Measures */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-whap-gold font-playfair">How We Ensure and Measure Success</h2>

                <div className="space-y-6">
                  <div className="border-l-4 border-whap-gold pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Educational Instruction</h3>
                    <p className="text-gray-600">
                      Ensured in a small-group, highly-individualized teaching environment, with a well-balanced
                      curriculum that includes speech, reading and composition, mathematics, social studies, science and
                      foreign language.
                    </p>
                  </div>

                  <div className="border-l-4 border-whap-gold pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Spiritual Guidance</h3>
                    <p className="text-gray-600">
                      Christian character and values are integrated into the curriculum through prayer, Bible studies
                      and discussions.
                    </p>
                  </div>

                  <div className="border-l-4 border-whap-gold pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Academic Enrichment</h3>
                    <p className="text-gray-600">
                      Provided through extra-curricular activities such as field trips, environmental studies, nature
                      hikes and computer literacy training.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <ImageWithFallback
                  src="https://github.com/daaimah123/WHAP_Website/blob/main/images/whapsa1bw.jpg?raw=true"
                  alt="Golden Gate Village"
                  width={500}
                  height={500}
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
