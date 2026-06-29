// const dns = require("dns");
// const nodemailer = require("nodemailer");

// const recipientEmail = "someone@gmail.com";
// const domain = recipientEmail.split("@")[1];

// // 1. Find the target domain's mail server
// dns.resolveMx(domain, (err, addresses) => {
//   if (err || !addresses.length) {
//     console.error("Could not resolve MX records:", err);
//     return;
//   }

//   // Sort by priority (lowest number has highest priority)
//   addresses.sort((a, b) => a.priority - b.priority);
//   const targetMailServer = addresses[0].exchange;

//   // 2. Create a direct transporter to that specific server
//   const directTransporter = nodemailer.createTransport({
//     host: targetMailServer,
//     port: 25, // Direct server-to-server communication uses port 25
//     secure: false,
//     tls: {
//       rejectUnauthorized: false, // Often required if the target server uses self-signed certs
//     },
//   });

//   const mailOptions = {
//     from: "me@mycustomserver.com",
//     to: recipientEmail,
//     subject: "Direct Delivery Test",
//     text: "Sent directly server-to-server!",
//   };

//   // 3. Deliver the mail directly
//   directTransporter.sendMail(mailOptions, (error, info) => {
//     if (error) console.log("Delivery failed:", error);
//     else console.log("Delivered directly to recipient server!", info.response);
//   });
// });
