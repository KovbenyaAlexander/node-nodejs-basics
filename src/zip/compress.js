import { createReadStream, createWriteStream } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { createGzip } from "zlib";
import { pipeline } from "stream";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
  const PATH = `${__dirname}\\files\\fileToCompress.txt`;
  const DEST = `${__dirname}\\files\\archive.gz`;
  const gzip = createGzip();

  const rs = createReadStream(PATH);
  const ws = createWriteStream(DEST);

  pipeline(rs, gzip, ws, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

await compress();
