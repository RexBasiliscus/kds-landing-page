// Sanitize input to prevent XSS attacks
export const sanitizeInput = (input) => {
  if (!input) return "";
  return input
    .replace(/[<>]/g, "") // Remove < and >
    .trim();
};

// Validate email format
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate form data
export const validateForm = (name, email, title, message) => {
  const errors = [];

  if (!name || name.trim().length === 0) {
    errors.push("Ime in priimek je obvezno polje.");
  }
  if (!email || email.trim().length === 0) {
    errors.push("Email je obvezno polje.");
  } else if (!isValidEmail(email)) {
    errors.push("Email je neveljaven.");
  }
  if (!message || message.trim().length === 0) {
    errors.push("Sporočilo je obvezno polje.");
  } else if (message.trim().length > 5000) {
    errors.push("Sporočilo je predolgo (max 5000 znakov).");
  }

  return errors;
};
