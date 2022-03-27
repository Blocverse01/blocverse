import teamMembers from "./team-members";
import twitter from "./svgs//twitter.png"
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-dom"

export default function TeamMember() {
    const activeMember = useParams();
    return (
        <div>
            <div className="py-10 sticky top-0">
                <button className="text-4xl">
                    <FontAwesomeIcon icon={solid("times")} />
                </button>
            </div>
            <h3 className="project-title">{teamMembers[activeMember].name}</h3>
            <h3 className="text-[20px] leading-[26.04px] lg:leading-[52.08px] lg:text-[40px] max-w-[1158px]">
                {teamMembers[activeMember].role}
            </h3>
            <div className="grid mt-[22px] md:mt-[32px] grid-cols-1 md:grid-cols-2 gap-[36.57px]">
                <div>
                    <img src={teamMembers[activeMember].picture} className="w-[455px] h-[520px] object-cover" alt={teamMembers[activeMember].name} />
                </div>
                <div>
                    <h3 className="lg:text-[48px] text-[24px] leading-[31.25px] font-bold lg:leading-[62.5px]">{teamMembers[activeMember].headline}</h3>
                    <p className="text-[16px] leading-[20.83px] mt-[23px] lg:mt-[12px] lg:text-[24px] lg:leading-[31.25px] text-[#2C2C2C]">
                        {teamMembers[activeMember].description}
                    </p>
                    <div className="mt-10">
                        <button className="btn text-2xl flex items-center">
                            <img src={twitter} className="mr-2" alt={teamMembers[activeMember].name + ":twitter"} /> {teamMembers[activeMember].twitterHandle}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}