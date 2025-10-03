import { Worker } from "bullmq";
import IORedis from "ioredis";
const connection = new IORedis.Redis({ maxRetriesPerRequest: null });
const worker = new Worker("foo", async (job) => {
    console.log(job.data);
}, { connection });
//# sourceMappingURL=index.js.map