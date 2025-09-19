// import { NextResponse } from "next/server"; // Removed
// import sharp from "sharp"; // Commented out

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file") as File | null;

  if (!file) {
    return { error: "No file uploaded", status: 400 }; // Plain object with status
  }

  try {
    // const buffer = Buffer.from(await file.arrayBuffer());
    // const optimizedBuffer = await sharp(buffer)
    //   .resize(800) // Adjust size as needed
    //   .toFormat("webp")
    //   .toBuffer();

    // const optimizedFile = new File(
    //   [optimizedBuffer],
    //   file.name.replace(/\.[^/.]+$/, "") + ".webp",
    //   {
    //     type: "image/webp",
    //   }
    // );

    return { success: true, file: "/default.webp" }; // Plain object
  } catch (error) {
    console.error("Image optimization failed:", error);
    return { error: "Image optimization failed", status: 500 }; // Plain object with status
  }
}
