import { Link } from "react-router-dom";

export default function WhatWeDo() {
  return (
    <section className="px-5 py-8 md:py-12 lg:py-16 md:px-6 lg:px-8">
      <div>
        <h3 className="headline">What We Do 🛠️</h3>
        <p className="lg:mt-[16px] text-sub-copy">
          Our dedicated team of professionals help you harness the limitless
          possibilities of the Blockchain.
        </p>
        <p className="lg:mt-[16px] text-sub-copy">
          We start with an understanding of your specific aspirations, followed
          by a practical application of Blockchain innovation.
        </p>
      </div>
      <div className="mt-[93px]">
        <h3 className="headline">
          We build and deliver easily scalable products and top-notch solutions.
        </h3>
        {/* <p className="text-[20px] leading-[26.04px] lg:leading-[52.08px] lg:text-[40px] mt-[74px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu massa
          nunc lacus nam dolor nisi vulputate. Gravida elementum elementum
          tellus potenti mi porttitor.
        </p> */}
      </div>
      <div className="mt-24 lg:mb-24">
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
