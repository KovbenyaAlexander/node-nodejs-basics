import { createWriteStream } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
  const PATH = `${__dirname}\\files\\fileToWrite.txt`;
  const ws = createWriteStream(PATH);

  process.stdin.on("data", (data) => {
    ws.write(data.toString());
  });
};

await write();
