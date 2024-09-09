const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const firstName = "Nathaniel";
const lastName = "Nacario";
const age = 21;
const schoolEmail = "nare.nacario.swu@phinmaed.com";

validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

app.get("/firstName", (req, res) => {
  res.send(firstName.toUpperCase());
});
app.get("/lastName", (req, res) => {
  res.send(lastName.toUpperCase());
});
app.get("/age", (req, res) => {
  res.send(age.toString());
});
app.get("/schoolEmail", (req, res) => {
  if (validateEmail.test(schoolEmail)) {
    res.send(schoolEmail);
  } else {
    res.status(400).send("Invalid email");
  }
});

app.get("/mydata", (req, res) => {
  res.json({
    first_name: firstName.toUpperCase(),
    last_name: lastName.toUpperCase(),
    age: age,
    school_email: validateEmail.test(schoolEmail)
      ? schoolEmail
      : "Invalid email",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
