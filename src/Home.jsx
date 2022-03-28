import hero from "./svgs/hero.svg";
import dot from "./svgs/dot.svg";
import Projects from "./Projects";
import BlogPreview from "./BlogPreview";
import { Link } from "react-router-dom";

export default function Home() {
  const services = [
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
  ];
  return (
    <section className="px-5 pt-3 md:px-6 lg:px-8">
      <header>
        <div>
          <h3 data-aos="fade-right" className="hero-text">
            Lorem ipsum dolor sit amet elit, lectus consectetur adipiscing
            semper varius morbi varius.
          </h3>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <p className="hero-sub-text">
                We bring the team.
                <br /> You bring the challenge.
              </p>
              <div className="mt-10">
                <button className="alt-btn text-2xl">Contact Us 👋</button>
              </div>
            </div>
            <div>
              <img data-aos="fade-up" src={hero} alt="hero" className="lg:-mt-[80px]" />
            </div>
          </div>
        </div>
      </header>

      <div className="py-20 md:py-24 lg:py-36">
        <p className="lg:text-[48px] text-[21px] leading-[28.04px] lg:leading-[62.5px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
          ultrices lectus nibh sed orci cras pellentesque varius egestas.
        </p>
        <div className="mt-10">
          <Link to="/about" className="alt-btn inline text-2xl">
            About us 🤔
          </Link>
        </div>

        <div className="py-20 md:py-24 lg:py-36">
          <h3 className="text-brand-blue border-b border-black text-[12px] leading-[15.62px] lg:leading-[41.66px] lg:text-[32px] font-[500]">
            OUR SERVICES
          </h3>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center">
                <img src={dot} className="mr-[12px] h-[15px]" alt="dot" />
                <span className="">{service}</span>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <button className="alt-btn text-2xl">What We Do 🛠️</button>
          </div>
        </div>

        <div id="bloc-labs" className="pb-20 pt-5 md:pb-24 lg:pb-36">
          <Projects />
        </div>

        <div id="bloc-learn">
          <p className="text-[20px] mb-[40px] lg:text-[40px] lg:leading-[52.08px] leading-[26.04px]">
            Blockchain knowledge is the most important weapon in driving for
            adoption, and Bloc-Learn is our contribution to this mission.
          </p>
          <p className="text-[20px] lg:text-[40px] lg:leading-[52.08px] leading-[26.04px]">
            Lorem ipsum details about the learn app sit amet, consectetur
            adipiscing elit. Accumsan dictumst magna eu egestas et sed.
            Fringilla arcu in ultrices aenean nulla.
          </p>
          <div className="mt-10">
            <button className="alt-btn text-2xl">Go To Bloc-Learn 📚</button>
          </div>
        </div>

        <div className="pt-20 md:pt-24 lg:pt-36">
          <BlogPreview />
        </div>
      </div>
    </section>
  );
}
