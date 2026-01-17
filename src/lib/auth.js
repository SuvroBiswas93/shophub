import { cookies } from "next/headers"

const MOCK_EMAIL = "suvrobiswas@gmail.com"
const MOCK_PASSWORD = "123456"

export async function login(email, password) {
  if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
    const cookieStore = await cookies()
    cookieStore.set("authenticated", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })
    return { success: true }
  }
  return { success: false, error: "Invalid email or password" }
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete("authenticated")
}

export async function isAuthenticated() {
  const cookieStore = await cookies()
  return cookieStore.get("authenticated")?.value === "true"
}
