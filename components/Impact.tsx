import ImageWithFallback from "./ImageWithFallback"

export default function Impact() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-whap-gold font-playfair">Making a Lasting Impact Since 1990</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded by Mattie Boatman and Royce McLemore, WHAP began with sixteen Marin City women gathering to
              express their concern for the community's young women. What started as a small support group has grown
              into a vital Family and Educational Resource Center.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Under Royce's leadership, Women Helping Women transformed into "Women Helping All People" - expanding our
              mission to serve all community members with comprehensive support services.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="text-center p-6 bg-whap-gold-light rounded-lg">
                <div className="text-4xl font-bold text-whap-gold font-playfair stat-number">30+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide font-medium">Years of Service</div>
              </div>
              <div className="text-center p-6 bg-whap-gold-light rounded-lg">
                <div className="text-4xl font-bold text-whap-gold font-playfair stat-number">1000+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide font-medium">Lives Transformed</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <ImageWithFallback
              src="https://github.com/daaimah123/WHAP_Website/blob/main/images/whap-history-01.jpg?raw=true"
              alt="Photo of Royce McLemore and Mattie Boatman"
              width={600}
              height={500}
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
