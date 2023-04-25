const morgan = require("morgan");

const express = require("express");
const AppError = require("./utils/AppError");
const userRouter = require("./routes/userRoutes");
const globalErrorHandler = require("./controllers/errorController");

const app = express();
if (!process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`can't find the ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
