import { readdir, access } from "node:fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
  const PATH = `${__dirname}/files`;

  try {
    const data = await readdir(PATH);
    console.log(data);
  } catch {
    throw new Error(`FS operation failed`);
  }
};

await list();
