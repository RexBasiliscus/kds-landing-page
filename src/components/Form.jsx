import C2AButton from "./C2AButton";
import { useRef, useState } from "react";
import { sanitizeInput, validateForm } from "../utils/formValidation";
import { sendContactEmail } from "../utils/emailService";

const Form = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setIsError(false);

    // Get form values
    const nameInput = form.current.elements.name.value;
    const emailInput = form.current.elements.email.value;
    const titleInput = form.current.elements.title.value;
    const messageInput = form.current.elements.message.value;

    // Validate form
    const validationErrors = validateForm(
      nameInput,
      emailInput,
      titleInput,
      messageInput
    );
    if (validationErrors.length > 0) {
      setLoading(false);
      setMessage(validationErrors.join(" "));
      setIsError(true);
      return;
    }

    // Sanitize inputs to prevent XSS
    form.current.elements.name.value = sanitizeInput(nameInput);
    form.current.elements.email.value = sanitizeInput(emailInput);
    form.current.elements.title.value = sanitizeInput(titleInput);
    form.current.elements.message.value = sanitizeInput(messageInput);

    try {
      // Send emails
      await sendContactEmail(form.current);
      setLoading(false);
      setMessage("Sporočilo poslano! Hvala za vaše povpraševanje.");
      setIsError(false);
      form.current.reset();
      setTimeout(() => setMessage(""), 5000); // Clear message after 5s
    } catch (error) {
      setLoading(false);
      setMessage("Napaka pri pošiljanju. Poskusite ponovno.");
      setIsError(true);
      console.error("EmailJS error:", error.text);
    }
  };
  return (
    <section
      id="contact"
      className="bg-background py-12 px-4"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary">
            Pošljite povpraševanje
          </h2>
          <p className="text-sm md:text-base text-black font-medium leading-tight mt-4">
            Sporočite nam vaše želje in skupaj jih bomo uresničili.
          </p>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4"
        >
          {/* Row: two inputs side by side on md+, stacked on small */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col">
              <label className="text-sm font-semibold text-black mb-2">
                Ime in priimek / Naziv
              </label>
              <input
                type="text"
                name="name"
                className="bg-white rounded-lg px-4 py-2 shadow-sm border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition"
              />
            </div>

            <div className="flex-1 flex flex-col">
              <label className="text-sm font-semibold text-black mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="bg-white rounded-lg px-4 py-2 shadow-sm border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition"
              />
            </div>
          </div>

          {/* Row: Subject field */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-black mb-2">
              Zadeva <span className="text-primary">(opcijsko)</span>
            </label>
            <input
              type="text"
              name="title"
              className="bg-white rounded-lg px-4 py-2 shadow-sm border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition"
            />
          </div>

          {/* Row: textarea full width */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-black mb-2">
              Sporočilo
            </label>
            <textarea
              name="message"
              rows="5"
              className="bg-white rounded-lg px-4 py-3 shadow-sm border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition resize-y"
            />
          </div>

          {/* Submit button */}
          <div className="flex justify-center mt-2">
            <C2AButton
              btnText={loading ? "Pošiljam..." : "Pošlji"}
              type="submit"
              disabled={loading}
              className="w-48 md:w-56 text-center font-semibold py-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* Success/Error message */}
          {message && (
            <p
              className={`text-center text-sm font-semibold mt-2 ${
                isError ? "text-red-600" : "text-primary"
              }`}
            >
              {message}
            </p>
          )}

          {/* Terms text */}
          <p className="text-center text-sm text-black font-medium -mt-2">
            S pošiljanjem se strinjate s{" "}
            <a
              href="#terms"
              className="text-primary"
            >
              splošnimi pogoji
            </a>
            .
          </p>
        </form>
      </div>
    </section>
  );
};

export default Form;
