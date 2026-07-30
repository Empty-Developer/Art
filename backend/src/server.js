import { config } from "dotenv";
config();
import app from "./app.js";
import { connectDB, disconnectDB } from "./config/db.js";

const PORT = process.env.PORT || 8001;

async function start() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`);
  });
}

start();

process.on("SIGINT", async () => {
  await disconnectDB();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await disconnectDB();
  process.exit(0);
});