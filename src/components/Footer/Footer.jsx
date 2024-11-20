import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-deep-black pb-10 pt-20">
      <section className="wrapper grid grid-cols-1 justify-between gap-6 lg:grid-cols-3">
        <div className="space-y-3">
          <h2 className="footer-title">Future Focus</h2>
          <p className="footer-desc">
            Future Focus is your partner in career success, offering expert
            guidance and resources to help you achieve your professional goals.
            Let&apos;s shape your future together!
          </p>
        </div>
        <div className="lg:justify-self-center">
          <h2 className="footer-title font-playfair !text-lg">Other</h2>
          <ul className="space-y-2 *:font-mulish *:text-base *:text-gray">
            <li className="footer-link">Terms of Service</li>
            <li className="footer-link">Privacy Policy</li>
            <li className="footer-link">Something goes here</li>
            <li className="footer-link">Portfolio</li>
            <li className="footer-link">Corporate</li>
          </ul>
        </div>
        <div className="lg:justify-self-center">
          <h2 className="footer-title font-playfair !text-lg">Social</h2>
          <ul className="flex items-center gap-2 *:cursor-pointer *:font-mulish *:text-xl *:text-gray">
            <li>
              <FaSquareFacebook className="footer-link" />
            </li>
            <li>
              <FaSquareInstagram className="footer-link" />
            </li>
            <li>
              <FaLinkedin className="footer-link" />
            </li>
            <li>
              <FaSquareTwitter className="footer-link" />
            </li>
            <li>
              <FaYoutube className="footer-link" />
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-10 border-t-2">
        <p className="pt-10 text-center text-gray">
          &copy; 2024 Future Focus. All Rights Reserved.
        </p>
      </section>
    </div>
  );
};

export default Footer;
