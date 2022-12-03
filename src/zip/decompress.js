import { createReadStream, createWriteStream } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { createGunzip } from "zlib";
import { pipeline } from "stream";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
  const PATH = `${__dirname}\\files\\archive.gz`;
  const DEST = `${__dirname}\\files\\fileToCompress.txt`;
  const gzip = createGunzip();

  const rs = createReadStream(PATH);
  const ws = createWriteStream(DEST);

  pipeline(rs, gzip, ws, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

await decompress();
