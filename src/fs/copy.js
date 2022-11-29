import { readdir, access, mkdir, copyFile } from "node:fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
  const OLD_PATH = `${__dirname}\\files`;
  const NEW_PATH = `${__dirname}\\files_copy`;

  if ((await isFolderExist(NEW_PATH)) || !(await isFolderExist(OLD_PATH))) {
    throw new Error(`FS operation failed`);
  } else {
    try {
      const files = await readdir(OLD_PATH);

      await mkdir(NEW_PATH);
      files.forEach(async (fileName) => {
        await copyFile(`${OLD_PATH}/${fileName}`, `${NEW_PATH}/${fileName}`);
      });
    } catch (error) {
      console.log(error);
      throw new Error(`FS operation failed2`);
    }
  }
};

async function isFolderExist(PATH) {
  try {
    const res = await access(PATH);
    return true;
  } catch {
    return false;
  }
}

await copy();
