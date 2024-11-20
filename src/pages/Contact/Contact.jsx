import { Helmet, HelmetProvider } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const handleSendMail = (e) => {
    e.preventDefault();
    

    emailjs
      .sendForm("service_phsonpg", "template_lh4jbcm", form.current, {
        publicKey: "Q-5Kx4ARO8_H6G6k2",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        },
      );
  };

  return (
    <HelmetProvider>
      <div className="wrapper grid w-max grid-cols-1 justify-center gap-8 lg:grid-cols-2">
        <Helmet>
          <title>Contact Us | Future Focus</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        <div className="h-full w-full">
          <h2 className="section-title !text-left">Contact Form</h2>
          <form
            ref={form}
            onSubmit={handleSendMail}
            className="mt-6 grid grid-cols-1 gap-3 font-mulish lg:grid-cols-2"
          >
            <div>
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Email Address"
              />
            </div>
            <div className="">
              <input
                type="text"
                name="subject"
                className="form-input"
                placeholder="Subject"
              />
            </div>
            <div>
              <input
                type="text"
                name="phone"
                className="form-input"
                placeholder="Phone"
              />
            </div>
            <div className="col-span-full">
              <textarea
                name="message"
                className="form-input h-36 w-full resize-none"
                placeholder="Message"
              ></textarea>
            </div>

            <div className="col-span-full">
              <button className="btn-main w-full text-center">
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="max-w-96 space-y-5 py-4">
          <div className="space-y-2">
            <h2 className="section-title !text-left !text-2xl">
              Postal Addess:
            </h2>
            <p className="desc !text-gray">
              PO Box 97845 Some str. 567, Los Angeles, California, United States
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="section-title !text-left !text-2xl">Phone:</h2>
            <p className="desc !text-gray">8(800) 123-12345</p>
          </div>
          <div className="space-y-2">
            <h2 className="section-title !text-left !text-2xl">Email:</h2>
            <p className="desc !text-gray">mail@company.com</p>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Contact;
