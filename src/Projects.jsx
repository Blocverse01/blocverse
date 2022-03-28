import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import blocticks from "./projects/bloc-ticks.png";
import love from "./projects/pexels-wendy-wei-2719500.jpg";
import { Link } from "react-router-dom";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Projects() {
  const projects = [
    {
      title: "Bloc-Ticks",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus ultrices lectus nibh sed orci cras pellentesque varius egestas.",
      imageSrc: blocticks,
      projectLink: "#blocticks",
    },
    {
      title: "Find Love For TC.eth",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus ultrices lectus nibh sed orci cras pellentesque varius egestas.",
      imageSrc: love,
      projectLink: "#blocticks",
    },
    {
      title: "Some Project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus ultrices lectus nibh sed orci cras pellentesque varius egestas.",
      imageSrc: blocticks,
      projectLink: "#blocticks",
    },
  ];
  const [inView, setInView] = useState(0);
  const handleNext = () => {
    let next = inView + 1;
    if (next > projects.length - 1) {
      return;
    }
    setInView(next);
  };
  const handlePrev = () => {
    let prev = inView - 1;
    if (prev < 0) {
      return;
    }
    setInView(prev);
  };

  return (
    <div>
      {projects.map((project, index) => (
        <section key={index}
          id="project"
          className={`grid grid-cols-1 gap-y-[28px] gap-x-[64px] overflow-hidden md:grid-cols-2 ${inView === index ? "max-w-full max-h-full" : "max-w-0 max-h-0"
            }`}
        >
          <div data-aos="fade-right" className="order-2 md:order-1">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">
              {project.description}
              <br />
              <a className="project-link" href={project.projectLink}>
                View Project
              </a>{" "}
              👉
            </p>
            <div className="flex mt-6">
              <button
                onClick={handlePrev}
                className={`h-[50px] mr-5 w-[50px] flex items-center justify-center rounded-full text-white ${inView === 0 ? "bg-black" : "bg-brand-blue"
                  }`}
              >
                <FontAwesomeIcon icon={solid("chevron-left")} />
              </button>
              <button
                onClick={handleNext}
                className={`h-[50px] mr-5 w-[50px] flex items-center justify-center rounded-full text-white ${inView === projects.length - 1 ? "bg-black" : "bg-brand-blue"
                  }`}
              >
                <FontAwesomeIcon icon={solid("chevron-right")} />
              </button>
            </div>
          </div>
          <div data-aos="fade-left" className="order-1 md:order-2">
            <img
              src={project.imageSrc}
              className="w-full rounded-[8px] lg:rounded-none lg:h-[542px] object-scale-down"
              alt={project.title}
            />
          </div>
        </section>
      ))}
      <div className="mt-14 lg:mt-0">
        <h3 className="lg:text-[48px] text-[24px] leading-[31.25px] font-bold lg:leading-[62.5px]">
          Got A Project? <br />
          <Link to="/contact" className="text-brand-blue underline">
            Let's Talk
          </Link>{" "}
          👋
        </h3>
      </div>
    </div>
  );
}
