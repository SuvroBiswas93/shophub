import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">ShopHub</h3>
            <p className="text-gray-400">Your trusted marketplace for quality items.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/items" className="hover:text-white transition">
                  Items
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-gray-400">Email: info@shophub.com</p>
            <p className="text-gray-400">Phone: +8801758197272</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">&copy; {currentYear} ShopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
