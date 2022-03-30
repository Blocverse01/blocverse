import { Link } from "react-router-dom";
import teamMembers from "./store/team-members";

export default function Team() {
  return (
    <section>
      <section className="grid grid-cols-2 gap-[15px] md:gap-[24px] md:grid-cols-3 xl:grid-cols-4">
        {teamMembers.map((member, index) => (
          <Link
            to={`/team/${member.name.split(" ").join("-").toLowerCase()}`}
            key={index}
            className="cursor-pointer"
          >
            <img
              src={member.picture}
              className="w-full h-[340px] object-cover"
              alt={member.name}
            />
            <h3 className="text-[16px] leading-[20.83px] md:text-[24px] md:leading-[31.25px] mt-[7px] md:mt-[23px] font-medium">
              {member.name}
            </h3>
            <h3 className="text-[12px] leading-[15.62px] md:text-[16px] md:leading-[20.83px]">
              {member.role}
            </h3>
          </Link>
        ))}
      </section>
    </section>
  );
}
