import React, { useRef } from "react";
import TextareaWithCounter from "./TextareaWithCounter";
import emailjs from "@emailjs/browser";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_n50s9tg", "template_v749usg", form.current, {
        publicKey: "c6lpaqCkPTWZBs4BH",
      })
      .then(
        () => {
          alert("SUCCESS!");
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="contact" className="font-montserrat">
      <div className="h-[90vh]">
        <div className="flex flex-col p-4">
          <div className="flex flex-col">
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="flex w-full input-field"
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                className="flex w-full input-field"
                required
              />
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter your subject (Optional)"
                className="flex w-full input-field"
              />
              <TextareaWithCounter />
              <button type="submit" className="flex w-full button my-2">
                <span className="flex mx-auto">
                  <IoIosSend className="text-[1.8rem] mr-1 pb-1" />
                  Send message
                </span>
              </button>
            </form>
          </div>
          <div>
            <div className="text-center">
              <h1 className="text-2xl">Get in Touch</h1>
              <p>
                I would love to hear from you! Feel free to reach out through my
                contact form or social media channels
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
              <a href=""></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
