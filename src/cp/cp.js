import { fork } from "child_process";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
  const PATH = `${__dirname}/files/script.js`;
  const child = fork(PATH, args);

  child.send(process.stdin);
  child.on("message", (msg) => {
    process.stdout.write(msg);
  });
};

spawnChildProcess();
