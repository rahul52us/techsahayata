import fs from "fs";
import path from "path";
import cloudinary from "../config/cloudinary.js";

const folderPath = "./public/assets"; // your local assets folder
const outputMap = "./scripts/urlMap.json"; // where to save old->new mapping

async function uploadToCloudinary(filePath: string, type: "image" | "video") {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      resource_type: type,
      folder: "stick_website_assets",
    });
    console.log(`✅ Uploaded: ${filePath}`);
    return result.secure_url;
  } catch (err: any) {
    console.error(`❌ Error uploading ${filePath}: ${err.message}`);
    return null;
  }
}

function getAllFiles(dir: string, allFiles: string[] = []): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) getAllFiles(fullPath, allFiles);
    else allFiles.push(fullPath);
  }
  return allFiles;
}

async function runUpload() {
  const files = getAllFiles(folderPath);
  const urlMap: Record<string, string> = {};

  for (const filePath of files) {
    const ext = path.extname(filePath).toLowerCase();
    const type: "image" | "video" =
      ext === ".mp4" || ext === ".mov" ? "video" : "image";

    const url = await uploadToCloudinary(filePath, type);
    if (url) urlMap[filePath] = url;
  }

  fs.writeFileSync(outputMap, JSON.stringify(urlMap, null, 2));
  console.log(`✅ URL Map saved to: ${outputMap}`);
}

runUpload();
