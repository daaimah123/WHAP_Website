import Link from "next/link"

export default function Footer() {
  return (
    <footer className="whap-footer">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="whap-footer-title text-2xl font-playfair">WHAP</h3>
            <p className="text-gray-300">Women Helping All People</p>
            <p className="text-gray-400">Empowering communities through education and support since 1990.</p>
          </div>

          <div className="space-y-4">
            <h4 className="whap-footer-title text-lg">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/services" className="whap-footer-link block">
                Programs & Services
              </Link>
              <Link href="/education" className="whap-footer-link block">
                Education
              </Link>
              <Link href="/about" className="whap-footer-link block">
                About Us
              </Link>
              <Link href="/news" className="whap-footer-link block">
                News & Events
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="whap-footer-title text-lg">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>
                79 Cole Drive, Suite 5<br />
                Marin City, CA 94965
              </p>
              <p>Phone: (415) 332-1703</p>
              <p>
                Email:{" "}
                <a href="mailto:whap1990@gmail.com" className="whap-footer-link">
                  whap1990@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="whap-footer-title text-lg">Support Our Mission</h4>
            <p className="text-gray-300">Help us continue serving the community with your generous support.</p>
            <Link href="/support" className="whap-btn whap-btn-primary">
              Donate
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Women Helping All People (WHAP). All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
