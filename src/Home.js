import hero from "./svgs/hero.svg";
import dot from "./svgs/dot.svg";
import Projects from "./Projects";

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
    <section className="px-5 pb-12 pt-3 md:px-6 lg:px-8">
      <header>
        <div>
          <h3 className="hero-text">
            Lorem ipsum dolor sit amet elit, lectus consectetur adipiscing
            semper varius morbi varius.
          </h3>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
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
              <img src={hero} alt="hero" className="lg:-mt-[80px]" />
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
          <button className="alt-btn text-2xl">About us 🤔</button>
        </div>

        <div className="py-20 md:py-24 lg:py-36">
          <h3 className="text-brand-blue border-b border-black text-[12px] leading-[15.62px] lg:leading-[41.66px] lg:text-[32px] font-[500]">
            OUR SERVICES
          </h3>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4">
            {services.map((service) => (
              <div className="flex items-center">
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
      </div>
    </section>
  );
}
