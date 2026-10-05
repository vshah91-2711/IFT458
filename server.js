const express = require("express");

const app = express(); // activate the express app
const port = 3030;

app.use(express.json());
app.use(express.static("public"));


app.get("/", (_req, res) => {
  res.json({
    status: "ok",
    service: "x-replies-express-app",
    measge: "hello from express",

  });
});


app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "x-replies-express-app",
  });
});

app.get("/api/messages", (_req, res) => {
  res.json({
    messages: [
      {
        id: 1,
        text: "Hello from Express.",
      },
    ],
  });
});

app.use((_req, res) => {
  res.status(404).json({
    error: "Not found",
  });
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});