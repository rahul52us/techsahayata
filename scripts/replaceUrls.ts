import fs from "fs";
import path from "path";

const urlMapPath = "./scripts/urlMap.json";
const projectDir = "./src"; // your source folder (adjust if needed)

const urlMap: Record<string, string> = JSON.parse(
  fs.readFileSync(urlMapPath, "utf8")
);

function replaceUrlsInFile(filePath: string) {
  let content = fs.readFileSync(filePath, "utf8");
  let changed = false;

  for (const [localPath, cloudUrl] of Object.entries(urlMap)) {
    const relativePath = localPath
      .replace("public", "")
      .replace(/\\/g, "/")
      .replace(/^\/+/, "");

    if (content.includes(relativePath)) {
      content = content.split(relativePath).join(cloudUrl);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`🔄 Updated URLs in: ${filePath}`);
  }
}

function walkDir(dir: string) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) walkDir(fullPath);
    else if (/\.(tsx|ts|js|css|html)$/.test(entry.name)) {
      replaceUrlsInFile(fullPath);
    }
  }
}

walkDir(projectDir);
console.log("✅ All URLs replaced successfully!");
