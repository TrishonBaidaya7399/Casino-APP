"use server";

import { revalidatePath } from "next/cache";

export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const validUsers: Record<string, string> = {
    "trishonbaidaya@gmail.com": "Password@1",
  };

  if (validUsers[email] === password) {
    revalidatePath("/");
    return { success: true, message: "Login successful" };
  }
  return { success: false, message: "Invalid email or password" };
}

export async function verifyOTPAction(formData: FormData) {
  const otp = formData.get("otp") as string;

  const validOTPs: Record<string, boolean> = {
    "12415": true,
  };

  if (validOTPs[otp]) {
    revalidatePath("/");
    return { success: true, message: "OTP verified" };
  }
  return { success: false, message: "Invalid OTP" };
}
