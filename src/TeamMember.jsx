import teamMembers from "./team-members";
import twitter from "./svgs//twitter.png"
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, Link } from "react-router-dom"

export default function TeamMember() {
    let { name } = useParams();
    let actualName = name.split("-").join(" ");
    const validMember = teamMembers.find((item) => (item.name.toLowerCase() === actualName.toLowerCase()));
    return (
        <section className="px-5 pt-3 pb-20 md:pb-24 lg:pb-36 md:px-6 lg:px-8">
            <div className="py-5 my-5 bg-white sticky top-0">
                <Link to="/about" className="text-2xl text-slate-700">
                    <FontAwesomeIcon className="mr-2" icon={solid("arrow-left")} /> About
                </Link>
            </div>
            <h3 className="project-title">{validMember.name}</h3>
            <h3 className="text-[20px] leading-[26.04px] lg:leading-[52.08px] lg:text-[40px] max-w-[1158px]">
                {validMember.role}
            </h3>
            <div className="grid mt-[22px] md:mt-[32px] grid-cols-1 md:grid-cols-2 gap-[36.57px]">
                <div>
                    <img src={validMember.picture} className="w-full md:w-[455px] h-[520px] object-cover" alt={validMember.name} />
                </div>
                <div className="self-center">
                    <h3 className="lg:text-[48px] text-[24px] leading-[31.25px] font-bold lg:leading-[62.5px]">{validMember.headline}</h3>
                    <p className="text-[16px] leading-[20.83px] mt-[23px] lg:mt-[12px] lg:text-[24px] lg:leading-[31.25px] text-[#2C2C2C]">
                        {validMember.description}
                    </p>
                    <div className="mt-10">
                        <button className="btn text-2xl flex items-center">
                            <img src={twitter} className="mr-2" alt={validMember.name + ":twitter"} /> {validMember.twitterHandle}
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-20">
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