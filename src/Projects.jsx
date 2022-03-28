import projects from "store/projects"
import { Link } from "react-router-dom";
export default function Projects() {
    return (
        <section className="px-5 py-8 md:py-12 lg:py-16 md:px-6 lg:px-8">
            <div>
                <h3 className="headline">Projects 💡</h3>
                <p className="lg:mt-[16px] text-sub-copy">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quis eu gravida habitasse diam consectetur aliquet ut cum. Consectetur accumsan donec nec, mattis morbi fringilla. Senectus nunc est pellentesque feugiat. Vitae leo amet sed quis eget.
                </p>
            </div>
            <section className="grid grid-cols-1 mt-[154px] gap-[68px]">
                {projects.map((project, index) => (
                    <section key={index}
                        id="project"
                        className="grid grid-cols-1 gap-y-[28px] gap-x-[64px] overflow-hidden md:grid-cols-2"
                    >
                        <div className="order-2 md:order-1">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">
                                {project.description}
                                <br />
                                <a className="project-link" href={project.projectLink}>
                                    View Project
                                </a>{" "}
                                👉
                            </p>
                        </div>
                        <div className="order-1 md:order-2">
                            <img
                                src={project.imageSrc}
                                className="w-full rounded-[8px] lg:rounded-none lg:h-[542px] object-contain"
                                alt={project.title}
                            />
                        </div>
                    </section>
                ))}
                <div className="mt-14 lg:mt-0 lg:mb-24">
                    <h3 className="lg:text-[48px] text-[24px] leading-[31.25px] font-bold lg:leading-[62.5px]">
                        Got A Project? <br />
                        <Link to="/contact" className="text-brand-blue underline">
                            Let's Talk
                        </Link>{" "}
                        👋
                    </h3>
                </div>
            </section>
        </section>
    );
}
