import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#a7ec4f] to-[#00bf63] mb-4" />
            <p className="text-gray-600 max-w-xs">Connecting innovative Algerian startups with strategic investors.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-600 hover:text-[#00bf63]">
                  About
                </Link>
              </li>
              <li>
                <Link href="#startup" className="text-gray-600 hover:text-[#00bf63]">
                Startup
                </Link>
              </li>
              <li>
                <Link href="#investor" className="text-gray-600 hover:text-[#00bf63]">
                Investor
                </Link>
              </li>
              {/* <li>
                <Link href="#testimonials" className="text-gray-600 hover:text-[#00bf63]">
                  Testimonials
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-600 hover:text-[#00bf63]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-600 hover:text-[#00bf63]">
                  Terms of Service
                </Link>
              </li>
              {/* <li>
                <Link href="#" className="text-gray-600 hover:text-[#00bf63]">
                  Cookie Policy
                </Link>
              </li> */}
            </ul>
          </div>
 
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://www.instagram.com/invsta.dz/" className="text-gray-600 hover:text-[#00bf63]">
                  Instagram
                </Link>
              </li>
              {/* <li>
                <Link href="#" className="text-gray-600 hover:text-[#00bf63]">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#00bf63]">
                  Facebook
                </Link>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">© {new Date().getFullYear()} إنفستا. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

