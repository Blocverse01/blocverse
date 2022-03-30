import { Link } from "react-router-dom";
import Team from "./Team";

export default function About() {
  return (
    <section className="px-5 pt-3 pb-20 md:pb-24 lg:pb-36 md:px-6 lg:px-8">
      <div data-aos="fade-down">
        <h3 className="hero-text">About BlocVerse</h3>
        <p className="text-sub-copy">
        Blocverse. A start up aimed at building open source blockchain utility products and 
        providing educational resources on blockchain technology.
        </p>
        <p>
        At Blocverse our mission is to reach out to every African on the power of decentralisation and 
        wealth creation that comes with blockchain technology, through putting out educative content on our Blog and
        building Web3 powered utility products from our Lab. 

        </p>
      </div>
      <div data-aos="fade-up" className="mt-[79px] mb-[65px]">
        <Team />
      </div>
      <div data-aos="fade-right">
        <h3 className="hero-text">Our blog rolls out easy to understand articles on blockchain technology concepts for absolute beginners.</h3>
        <p className="text-sub-copy">
        We're in the process of setting up our learning platform 
        which would contain free educational content organized as courses to get newbies onboard the Web3 ecosystem.
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
