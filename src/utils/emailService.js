import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const CONTACT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
const AUTOREPLY_TEMPLATE_ID = import.meta.env
  .VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendContactEmail = async (formElement) => {
  // Send Contact Us email to you
  await emailjs.sendForm(SERVICE_ID, CONTACT_TEMPLATE_ID, formElement, PUBLIC_KEY);
  
  // Send Auto-Reply email to the user
  await emailjs.sendForm(
    SERVICE_ID,
    AUTOREPLY_TEMPLATE_ID,
    formElement,
    PUBLIC_KEY
  );
};
