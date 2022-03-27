import { Link } from "react-router-dom";
import Team from "./Team";

export default function About() {
  return (
    <section className="px-5 pt-3 pb-20 md:pb-24 lg:pb-36 md:px-6 lg:px-8">
      <div data-aos="fade-down">
        <h3 className="hero-text">About BlocVerse</h3>
        <p className="text-[20px] leading-[26.04px] lg:leading-[52.08px] lg:text-[40px] max-w-[1158px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu massa
          nunc lacus nam dolor nisi vulputate. Gravida elementum elementum
          tellus potenti mi porttitor.
        </p>
      </div>
      <div data-aos="fade-up" className="mt-[79px] mb-[65px]">
        <Team />
      </div>
      <div data-aos="fade-right">
        <h3 className="hero-text">Lorem ipsum dolor sit amet elit, adipiscing semper luctus morbi varius.</h3>
        <p className="text-[20px] leading-[26.04px] lg:leading-[52.08px] lg:text-[40px] max-w-[1158px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu massa
          nunc lacus nam dolor nisi vulputate. Gravida elementum elementum
          tellus potenti mi porttitor.
        </p>
      </div>
      <div className="mt-14">
        <h3 className="lg:text-[48px] text-[24px] leading-[31.25px] font-bold lg:leading-[62.5px]">
          Got A Project? <br />
          <Link to="/contact" className="text-brand-blue underline">
            Let's Talk
          </Link>{" "}
          👋
        </h3>
      </div>
    </section>
  );
}
