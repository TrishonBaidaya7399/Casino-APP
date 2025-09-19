import { NextResponse } from "next/server";
import sharp from "sharp";

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file") as File | null;

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    const optimizedBuffer = await sharp(buffer)
      .resize(800) // Adjust size as needed
      .toFormat("webp")
      .toBuffer();

    const optimizedFile = new File(
      [optimizedBuffer],
      file.name.replace(/\.[^/.]+$/, "") + ".webp",
      {
        type: "image/webp",
      }
    );

    return NextResponse.json({ success: true, file: optimizedFile });
  } catch (error) {
    console.error("Image optimization failed:", error);
    return NextResponse.json(
      { error: "Image optimization failed" },
      { status: 500 }
    );
  }
}
