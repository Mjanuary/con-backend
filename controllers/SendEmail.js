const nodemailer = require("nodemailer");
const config = require("config");

//setting config for an emailsender
// Get the active year
const send = async ({ to, subject, text, html }) => {
  try {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "gmail",
      // host: "smtp.ethereal.email",
      // port: 587,
      // secure: false, // true for 465, false for other ports
      auth: {
        user: config.get("email"), // generated ethereal user
        pass: config.get("email_passowrd"), // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `${config.get("system")} <${config.get("email")}>`, // sender address
      to,
      subject,
      text,
      html,
    });

    return {
      status: true,
      id: info.messageId,
    };
  } catch (error) {
    console.log(error);
    return { status: false, id: null };
    // throw "Failed to peform the task, try again later";
  }
};

module.exports = {
  send,
};
