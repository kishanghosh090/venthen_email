import express from "express";
import SMTPServer from "smtp-server";

const app = express();
const smtpServer = new SMTPServer.SMTPServer({
  allowInsecureAuth: true,
  authOptional: true,
  hideSTARTTLS: true,
  onConnect(session, callback) {
    console.log("onConnect", session.id);
    callback();
  },
  // onAuth() {},
  onMailFrom(address, session, callback) {
    console.log("onMailFrom ", address.address, " ", session.id);
    callback();
  },
  onRcptTo(address, session, callback) {
    console.log("onRcptTo ", address.address, " ", session.id);
    callback();
  },
  onData(stream, session, callback) {
    console.log("onData: ", session.id);

    stream.on("data", (data) => {
      console.log(data.toString());
    });
    stream.on("end", () => {
      callback();
    });
  },
  onClose(session, callback) {
    console.log("onClose: ", session.id);
    callback();
  },
});

const PORT = process.env.PORT || 3000;
const SMTP_PORT = process.env.SMTP_PORT || 25;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
import apiRouter from "./module/auth/auth.route";

app.use("/api/v1/auth", apiRouter);
// Start the SMTP server
smtpServer.listen(SMTP_PORT, () => {
  console.log(`SMTP server is running on port ${SMTP_PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
