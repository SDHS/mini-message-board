import express from "express";

import rootRouter from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", rootRouter);

app.listen(PORT, () => {
  console.log(`App is running on localhost:${PORT}`);
});

export default app;
