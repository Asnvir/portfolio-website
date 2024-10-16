'use server';

import sgMail, { MailDataRequired } from '@sendgrid/mail';

import { ContactForm } from '@types';

sgMail.setApiKey(`${process.env.SENDGRID_API_KEY}`);

export async function handleSubmitAction(contactForm: ContactForm, token: string) {
  const email: MailDataRequired = {
    from: {
      name: 'Website contact',
      email: process.env.TO_EMAIL_ADDRESS || '',
    },
    replyTo: contactForm.from,
    to: process.env.TO_EMAIL_ADDRESS,
    subject: contactForm.subject,
    text: contactForm.message,
  };

  const isRecaptchaVerified = await verifyRecaptcha(token);
  console.log(`isRecaptchaVerified: ${isRecaptchaVerified}`);

  if (!isRecaptchaVerified) {
    throw new Error('reCAPTCHA verification failed.');
  }

  try {
    const response = await sgMail.send(email);
    console.log(`response`);
    console.log(response);
  } catch (error) {
    // Check if the error has a response
    if (error.response) {
      console.log('Error Status:', error.response.status);

      // Check if the response body has the errors array
      if (error.response.data && error.response.data.errors) {
        // Log each error in the errors array
        error.response.data.errors.forEach((errorItem) => {
          console.log('Error:', errorItem);
        });
      } else {
        // If no specific errors are available, log the entire response
        console.log('Error Data:', error.response.data);
      }
    } else {
      console.log('Error:', error.message);
    }
  }
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  const response = await fetch(verificationUrl, {
    method: 'POST',
  });

  const data = await response.json();

  return data.success && data.score >= 0.5;
}
