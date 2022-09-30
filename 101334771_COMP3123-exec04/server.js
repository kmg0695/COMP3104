/*
Labs 4 - Fullstack
Kym Gripal
101334771
*/

const e = require("express");

const PORT = 8080;

const app = e();

app.get("/hello", (req, res) => {
  res.send("<h1>Hello Express JS</h1>");
});

app.get("/user", (req, res) => {
  res.send(JSON.stringify(req.query));
});

app.post("/user/:fn/:ln", (req, res) => {
  const s = req.params;

  let fname = s.fn;
  let lname = s.ln;

  const out = {
    fname,
    lname,
  };

  res.json(out);
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
