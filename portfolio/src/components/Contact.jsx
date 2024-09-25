import React from "react";
import { Github, Linkedin, Mail, Phone, Twitter, MessageCircleCode  } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-fit flex flex-col text-white items-center text-center p-4">
      <h2 className="text-white bg-gray py-1 px-6 rounded-xl">Get in touch</h2>
      <h2 className="text-white mt-4">
        What’s next? Feel free to reach out to me if you are looking <br /> for
        a developer, have a query, or simply want to connect.
      </h2>
      <div className="flex gap-2 mt-10">
        <div>
          <a href="mailto:maliakhil942@gmail.com">
            <Mail />
          </a>
        </div>
        <div>
          <a href="mailto:maliakhil942@gmail.com">maliakhil942@gmail.com</a>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <div>
          <a href="mailto:maliakhil942@gmail.com">
            <Phone />
          </a>
        </div>
        <div>
          <a href="tel:+918619414632">+91 8619414632</a>
        </div>
      </div>
        <h2 className="mt-10 ">You may also find me on these platforms!</h2> 
      <div className="flex mt-2 gap-2">
        <div className="hover:bg-gray p-1 rounded-xl">
            <Twitter />
        </div>
        <div className="hover:bg-gray p-1 rounded-xl">
            <Github/>
        </div>
        <div className="hover:bg-gray p-1 rounded-xl">
            <Linkedin/>
        </div>
        <div className="hover:bg-gray p-1 rounded-xl">
        <MessageCircleCode />
        </div>
      </div>
    </div>
  );
};

export default Contact;
