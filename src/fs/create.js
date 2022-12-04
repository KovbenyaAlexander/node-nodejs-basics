import { fileURLToPath } from "url";
import { dirname } from "path";
import { access, constants, appendFile } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  const PATH = `${__dirname}/files/fresh.txt`;

  if (await isFileExist(PATH)) {
    throw new Error(`FS operation failed`);
  } else {
    appendFile(PATH, `I am fresh and young`);
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

await create();
