import { fileURLToPath } from "url";
import { dirname } from "path";
import { access, constants, rename as pRename } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  const PATH_TO_WRONG_FILE = `${__dirname}\\files\\wrongFilename.txt`;
  const PATH_TO_RIGHT_FILE = `${__dirname}\\files\\properFilename.md`;

  if (!(await isFileExist(PATH_TO_WRONG_FILE)) || (await isFileExist(PATH_TO_RIGHT_FILE))) {
    throw new Error(`FS operation failed`);
  } else {
    pRename(PATH_TO_WRONG_FILE, PATH_TO_RIGHT_FILE);
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

await rename();
