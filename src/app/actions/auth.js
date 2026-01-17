"use server"

import { login as authLogin, logout as authLogout } from "@/lib/auth"

export async function loginAction(email, password) {
  return await authLogin(email, password)
}

export async function logoutAction() {
  return await authLogout()
}
