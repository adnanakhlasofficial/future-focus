import arrowIcon from "../../assets/arrow-right.svg";
import teamImg from "../../assets/team.jpg"

const About = () => {
  return (
    <section className="flex justify-between items-center gap-8">
      <div className="space-y-4 w-1/2">
        <div className="space-y-4">
          <h2 className="section-title !text-left">About Us</h2>
          <p className="section-desc !mx-0 !text-left">
            At Future Focus, we are dedicated to guiding individuals toward
            fulfilling careers. Our platform combines expert insights, tools,
            and personalized support to help you identify your strengths, set
            clear goals, and achieve professional success. Whether you&apos;re
            starting fresh or seeking growth, we&apos;re here to empower every
            step of your journey.
          </p>
        </div>

        <div>
          <ul className="space-y-2 *:flex *:items-start *:gap-2 *:font-mulish *:text-gray">
            <li>
              <img src={arrowIcon} alt="arrow_icon" />
              Our Mission: To empower individuals to achieve their professional
              aspirations with confidence and clarity.
            </li>
            <li>
              <img src={arrowIcon} alt="arrow_icon" />
              Expert Guidance: Access tailored career advice from seasoned
              professionals.
            </li>
            <li>
              <img src={arrowIcon} alt="arrow_icon" />
              Comprehensive Resources: Explore tools, workshops, and assessments
              designed to unlock your potential.
            </li>
            <li>
              <img src={arrowIcon} alt="arrow_icon" />
              Personalized Support: Get one-on-one assistance to align your
              strengths with the right opportunities.
            </li>
            <li>
              <img src={arrowIcon} alt="arrow_icon" />
              For Everyone: Whether you&apos;re a student, a job-seeker, or
              looking to transition careers, we&apos;ve got you covered.
            </li>
            <li>
              <img src={arrowIcon} alt="arrow_icon" />
              Proven Success: Join countless others who have achieved their
              career dreams with our help.
            </li>
          </ul>
        </div>
      </div>

      <div className="w-1/2">
        <img className="rounded-lg w-full" src={teamImg} alt="team_img" />
      </div>
    </section>
  );
};

export default About;
