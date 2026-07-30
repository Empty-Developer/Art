require("dotenv").config();

const app = require("./app");
const pool = require("./config/db");

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await pool.query("SELECT NOW()")
    console.log("postgreSQL connect")

    app.listen(PORT, () => {
      console.log(`server connect witch port: ${PORT}`)
    })
  } catch (error) {
    console.error("error server",error.message);
  }
}

start();