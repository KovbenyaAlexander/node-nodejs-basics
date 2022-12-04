import { fileURLToPath } from "url";
import { dirname } from "path";
import { access, constants, rm } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  const PATH = `${__dirname}/files/fileToRemove.txt`;

  if (await isFileExist(PATH)) {
    rm(PATH);
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

await remove();
