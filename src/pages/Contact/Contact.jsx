const Contact = () => {
  return (
    <div className="wrapper grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="h-full lg:col-span-2">
        <h2 className="section-title !text-left">Contact Form</h2>
        <form className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-3 font-mulish">
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
          <div>
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
      <div className="space-y-5 py-4">
        <div className="space-y-2">
            <h2 className="section-title !text-2xl !text-left">Postal Addess:</h2>
            <p className="desc !text-gray">PO Box 97845 Some str. 567, Los Angeles, California, United States</p>
        </div>
        <div className="space-y-2">
            <h2 className="section-title !text-2xl !text-left">Phone:</h2>
            <p className="desc !text-gray">8(800) 123-12345
            </p>
        </div>
        <div className="space-y-2">
            <h2 className="section-title !text-2xl !text-left">Email:</h2>
            <p className="desc !text-gray">mail@company.com
            </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
