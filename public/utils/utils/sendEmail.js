// utils/sendEmail.js
import emailjs from "@emailjs/browser";

export const sendEmailWithText = async ({ toEmail, subject, message }) => {
  const templateParams = {
    to_email: toEmail,
    subject: subject,
    message: message,
  };

  return emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams, "YOUR_PUBLIC_KEY");
};
