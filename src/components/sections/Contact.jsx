import React, { useRef } from "react";
import TextareaWithCounter from "../form/TextareaWithCounter";
import emailjs from "@emailjs/browser";
import { IoIosSend } from "react-icons/io";
import socialLinks from "../../data/socialLinks";

const Contact = () => {
  const form = useRef();
  const publicKey = "c6lpaqCkPTWZBs4BH";
  const serviceId = "service_n50s9tg";
  const templatesId = "template_v749usg";
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templatesId, form.current, publicKey)
      .then(() => {
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        alert("Failed to send email. Please try again.");
      });
  };

  return (
    <section id="contact" className="my-12 p-4 md:px-10 lg:px-32">
      <div className="">
        <h2 className="text-myPrimary text-3xl mb-4 text-center md:text-start">
          <span className="border-b-2 border-myAccent font-semibold">
            CONTACT ME
          </span>
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="flex md:flex-1 md:order-2 md:pl-8 flex-col">
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="flex w-full input-field my-2"
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                className="flex w-full input-field my-2"
                required
              />
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter your subject (Optional)"
                className="flex w-full input-field my-2"
              />
              <TextareaWithCounter className="my-2" />
              <button type="submit" className="flex w-full button my-2">
                <span className="flex mx-auto">
                  <IoIosSend className="text-[1.8rem] mr-1 pb-1" />
                  Send message
                </span>
              </button>
            </form>
          </div>
          <div className="flex md:order-1 md:flex-1 flex-col">
            <div className="text-center md:text-start my-8">
              <h1 className="text-2xl">Get in Touch</h1>
              <p className="my-2">
                I would love to hear from you! If you have suggestion or
                feedback feel free to reach out through my contact form or
                social media channels
              </p>
              <p>+63 976 319 9300</p>
              <a
                href="mailto:johnaaronapayong@gmail.com"
                className="hover:underline"
              >
                johnaaronapayong@gmail.com
              </a>
            </div>
            <div>
              {/* Social Media Links */}
              <div className="flex space-x-4 md:justify-around justify-center p-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${link.icon.displayName} profile`}
                    className="text-2xl text-gray-400 hover:text-myPrimary transition-colors duration-300"
                  >
                    <link.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
