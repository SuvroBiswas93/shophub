"use client"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
// import { logoutAction } from "@/app/actions/auth"
import { useEffect, useState } from "react"

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Check authentication from localStorage since we can't access cookies in client
    const auth = localStorage.getItem("authenticated") === "true"
    setIsAuthenticated(auth)
    setIsLoading(false)
  }, [])

  const handleLogout = async () => {
    await logoutAction()
    localStorage.removeItem("authenticated")
    setIsAuthenticated(false)
    setIsMenuOpen(false)
    router.push("/")
  }

  if (isLoading) return null

  return (
    <nav className="bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-2xl hover:text-orange-400 transition duration-300 shrink-0">
          ShopHub
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/" className={`hover:text-orange-400 transition ${pathname === "/" ? "text-orange-400" : ""}`}>
            Home
          </Link>
          <Link
            href="/items"
            className={`hover:text-orange-400 transition ${pathname === "/items" ? "text-orange-400" : ""}`}
          >
            Items
          </Link>

          {isAuthenticated ? (
            <>
              <Link
                href="/add-item"
                className={`hover:text-orange-400 transition ${pathname === "/add-item" ? "text-orange-400" : ""}`}
              >
                Add Item
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition duration-300 font-semibold"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className={`bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded transition duration-300 font-semibold ${pathname === "/login" ? "bg-orange-700" : ""}`}
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700 px-4 py-4 space-y-3">
          <Link
            href="/"
            className={`block py-2 hover:text-orange-400 transition ${pathname === "/" ? "text-orange-400" : ""}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/items"
            className={`block py-2 hover:text-orange-400 transition ${pathname === "/items" ? "text-orange-400" : ""}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Items
          </Link>

          {isAuthenticated ? (
            <>
              <Link
                href="/add-item"
                className={`block py-2 hover:text-orange-400 transition ${pathname === "/add-item" ? "text-orange-400" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Add Item
              </Link>
              <button
                onClick={handleLogout}
                className="w-full bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition duration-300 font-semibold text-left"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className={`block bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded transition duration-300 font-semibold text-center ${pathname === "/login" ? "bg-orange-700" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  )
}
