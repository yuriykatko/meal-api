import path from "path";
import { promises as fs } from "fs";

export default async function getAllData() {
  const jsonDirectory = path.join(process.cwd(), "json");
  const fileContents = await fs.readFile(jsonDirectory + "/data.json", "utf8");

  return JSON.parse(fileContents);
}
