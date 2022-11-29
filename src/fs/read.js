import { fileURLToPath } from "url";
import { dirname } from "path";
import { access, constants, readFile } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const PATH = `${__dirname}\\files\\fileToRead.txt`;

  if (await isFileExist(PATH)) {
    const data = await readFile(PATH, { encoding: "utf8" });
    console.log(data);
  } else {
    throw new Error(`FS operation failed`);
  }
};

async function isFileExist(PATH) {
  try {
    await access(PATH, constants.R_OK | constants.W_OK);
    return true;
  } catch {
    return false;
  }
}

await read();
