import { createReadStream } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const PATH = `${__dirname}/files/fileToRead.txt`;
  const rs = createReadStream(PATH);

  rs.on(`readable`, () => {
    let chunk;
    while ((chunk = rs.read()) !== null) {
      process.stdout.write(chunk.toString());
    }
  });
};

await read();
