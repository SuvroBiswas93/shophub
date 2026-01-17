"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { loginAction } from "@/app/actions/auth"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const result = await loginAction(email, password)
      if (result.success) {
        localStorage.setItem("authenticated", "true")
        // This is the main redirect path after authentication - navigate from login to items list
        router.push("/items")
      } else {
        setError(result.error || "Login failed")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4">
        <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6 text-slate-900">Login</h1>

          <form onSubmit={handleSubmit} className="space-y-4 ">
            <div>
              <label className="block text-slate-700 font-bold  mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="suvrobiswas@gmail.com"
                className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:border-teal-500"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:border-teal-500"
                required
                disabled={isLoading}
              />
              <p className="text-sm text-slate-500 mt-2">Demo password: 123456</p>
            </div>

            {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">{error}</div>}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-teal-500 text-white  cursor-pointer font-bold py-2 px-4 rounded hover:shadow-lg transition disabled:bg-slate-400"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}
