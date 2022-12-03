import { Worker } from "node:worker_threads";
import OS from "os";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
  const cpus = OS.cpus().length;
  const workers = [];

  for (let i = 0; i < cpus; i++) {
    workers.push(
      new Promise((resolve, reject) => {
        const PATH_TO_WORKER = `${__dirname}\\worker.js`;
        const worker = new Worker(PATH_TO_WORKER, {
          workerData: i + 10,
        });
        worker.on("message", resolve);
        worker.on("error", reject);
        worker.on("exit", (code) => {
          if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
        });
      })
    );
  }

  const results = await Promise.allSettled(workers);

  const logs = results.map((result) => ({
    status: result.status === `fulfilled` ? "resolved" : "error",
    data: result.value ? result.value : null,
  }));
  console.log(logs);
};

await performCalculations();
