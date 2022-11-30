import { fileURLToPath } from "url";
import { dirname } from "path";
import { readFile } from "node:fs/promises";
import { createHmac } from "node:crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
  const PATH = `${__dirname}\\files\\fileToCalculateHashFor.txt`;
  const content = await readFile(PATH, { encoding: "utf-8" });
  const hash = createHmac("sha256", content).digest("hex");

  console.log(hash);
};

await calculateHash();
