// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(
  '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',
);
const msg = {
  to: 'martin.studna2@gmail.com', // Change to your recipient
  from: 'podpora@internetovyinstitut.cz', // Change to your verified sender
  subject: 'Aktivace účtu',
  templateId: 'd-991933b7cfe6444fb207af95fe6e8c56',
  dynamicTemplateData: {
    subject: 'Obnova hesla',
    randomness: Math.random(),
    email: 'martin.studna2@gmail.com',
    verificationLink:
      'http://localhost:8080/auth/reset-password?userid=ckmj02w4n00001svff7idty0w',
  },
};
sgMail
  .send(msg)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
