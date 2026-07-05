import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import portfolioData from "../data/portfolioData.js";

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mo39kzg",
        "template_qmfx9rk",
        e.target,
        "59y8sldM3YuW4okic"
      )
      .then(() => {
        alert("Message sent successfully!");
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to send message.");
      });
  };

  return (
    <section className="mt-24 mb-16">

      {/* Header */}
      <div className="mb-16">
        <p className="text-orange-500 uppercase tracking-[3px] text-sm">
          Contact
        </p>

        <h2 className="text-5xl font-black mt-3">
          Let's Work Together
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl">
          Have an idea, a project, or an opportunity? Feel free to reach out.
          I'm always open to discussing new challenges and collaborations.
        </p>
      </div>

      <div className="grid lg:grid-cols-[380px_1fr] gap-8">

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            bg-[#181818]
            border
            border-[#2a2a2a]
            rounded-3xl
            p-8
          "
        >
          <h3 className="text-2xl font-bold mb-8">
            Contact Information
          </h3>

          <div className="space-y-8">

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#222] flex items-center justify-center">
                <Mail className="text-orange-500" size={20} />
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Email
                </p>

                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="text-white hover:text-orange-500 transition"
                >
                  {portfolioData.personal.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#222] flex items-center justify-center">
                <Phone className="text-orange-500" size={20} />
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Phone
                </p>

                <a
                  href={`tel:${portfolioData.personal.phone}`}
                  className="text-white hover:text-orange-500 transition"
                >
                  {portfolioData.personal.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#222] flex items-center justify-center">
                <MapPin className="text-orange-500" size={20} />
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Location
                </p>

                <p>
                  {portfolioData.personal.location}
                </p>
              </div>
            </div>

          </div>

          {/* Availability */}
          <div
            className="
              mt-10
              rounded-2xl
              bg-[#222]
              border
              border-green-500/20
              p-5
            "
          >
            <div className="flex items-center gap-3">

              <span
                className="
                  w-3
                  h-3
                  rounded-full
                  bg-green-500
                  animate-pulse
                "
              />

              <p className="font-semibold text-green-400">
                Available for Work
              </p>

            </div>

            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              Currently available for remote, hybrid, and onsite opportunities.
            </p>

          </div>

        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            bg-[#181818]
            border
            border-[#2a2a2a]
            rounded-3xl
            p-10
          "
        >

          <div className="mb-8">

            <h3 className="text-2xl font-bold">
              Send Me a Message
            </h3>

            <p className="text-gray-400 mt-2">
              Fill out the form below and I'll get back to you as soon as
              possible.
            </p>

          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>

            <div className="grid md:grid-cols-2 gap-2">

              <input
                type="text" name="user_name"
                placeholder="Your Name"
                className="
                  w-full
                  bg-[#222]
                  border
                  border-[#333]
                  rounded-xl
                  px-5
                  py-4
                  outline-none
                  transition-all
                  focus:border-orange-500
                  focus:ring-2
                  focus:ring-orange-500/20
                "
              />

              <input
                type="email" name="user_email"
                placeholder="Email Address"
                className="
                  w-full
                  bg-[#222]
                  border
                  border-[#333]
                  rounded-xl
                  px-5
                  py-4
                  outline-none
                  transition-all
                  focus:border-orange-500
                  focus:ring-2
                  focus:ring-orange-500/20
                "
              />

            </div>

            <div className="flex flex-col gap-2">

            <input
              type="text" name="subject"
              placeholder="Subject"
              className="
                w-full
                bg-[#222]
                border
                border-[#333]
                rounded-xl
                px-5
                py-4
                outline-none
                transition-all
                focus:border-orange-500
                focus:ring-2
                focus:ring-orange-500/20
              "
            />

            <textarea
              rows="8" name="message"
              placeholder="Your Message"
              className="
                w-full
                bg-[#222]
                border
                border-[#333]
                rounded-xl
                px-5
                py-4
                outline-none
                resize-none
                transition-all
                focus:border-orange-500
                focus:ring-2
                focus:ring-orange-500/20
                mt-4
              "
            />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-8
                  py-4
                  rounded-xl
                  bg-orange-500
                  hover:bg-orange-600
                  hover:scale-[1.03]
                  transition-all
                  duration-300
                  font-semibold
                  shadow-lg
                  shadow-orange-500/20
                "
              >
                <Send size={18} />
                Send Message
              </button>
            </div>

          </form>

        </motion.div>

      </div>

    </section>
  );
}