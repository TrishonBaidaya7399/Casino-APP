"use server";

export async function submitFormAction(data: any) {
  console.log({ Submitted_Data: data });
  // Dummy API call
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { success: true, message: "Form submitted successfully" };
  } catch (error) {
    return { success: false, error: error };
  }
}


export async function submitForm(data: any) {
   console.log({ Submitted_Wallet_opening_data: data });
  // Dummy API call
  return new Promise((resolve) =>
    setTimeout(() => resolve({ success: true, message: "Submission successful!" }), 1000)
  );
}