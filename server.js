const mongoose = require("mongoose");
const dotenv = require("dotenv");
process.on("uncaughtException", (err) => {
  console.log("UNHANDLED Exception 💥 Shutting down");
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: "./config.env" });
const app = require("./app");

mongoose
  .connect(
    process.env.DATABASE_LOCAL
    //      {
    //     useNewUrlParser: true,
    //     useCreateIndex: true,
    //     useFindAndModify: false,
    //   }
  )
  .then(() => {
    console.log("DB connection successfull");
  });

const port = 8000;

const server = app.listen(port, () => {
  console.log("listening to the port 5000");
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTIONS 💥 Shutting down");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
