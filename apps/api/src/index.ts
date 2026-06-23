import express from "express";
import SMTPServer from "smtp-server";

const app = express();
const smtpServer = new SMTPServer.SMTPServer({});

const PORT = process.env.PORT || 3000;
const SMTP_PORT = process.env.SMTP_PORT || 25;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the SMTP server
smtpServer.listen(SMTP_PORT, () => {
  console.log(`SMTP server is running on port ${SMTP_PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
