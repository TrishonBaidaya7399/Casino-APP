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
