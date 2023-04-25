const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  // 1) create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  // 2) define the email options
  const mailOptions = {
    from: "Naman Kumar <naman@gmail.com>",
    to: options.email,
    to: options.subject,
    to: options.message,
    // html:
  };
  //Actually send the mail
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
