import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { contactData } from '../data/portfolioData';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const INITIAL_FORM: ContactFormData = { name: '', email: '', message: '' };

function Contact() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Form submitted:', formData);
    alert(`Thanks, ${formData.name}! Your message has been "sent" (check the console).`);

    setFormData(INITIAL_FORM);
  };

  return (
    <section id="contact" className="scroll-mt-20 px-4 py-20">
      <div className="mx-auto max-w-xl">
        <h2 className="text-center text-2xl font-bold text-gray-900 md:text-3xl">
          Contact Me
        </h2>
        <p className="mt-2 text-center text-sm text-gray-500">
          Have a project or a question? Send a message using the form below.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
              placeholder="email@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="mt-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-700"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 flex justify-center gap-6">
          <a
            href={`mailto:${contactData.email}`}
            aria-label="Email"
            className="text-gray-500 transition hover:text-indigo-600"
          >
            <MdEmail className="h-7 w-7" />
          </a>
          <a
            href={contactData.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-gray-500 transition hover:text-indigo-600"
          >
            <FaLinkedin className="h-7 w-7" />
          </a>
          <a
            href={contactData.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-gray-500 transition hover:text-indigo-600"
          >
            <FaGithub className="h-7 w-7" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
