import { mainSkill } from "@/mockup/mySkill";
import CardSkill from "./card/CardSkill";

export default function MainSkills() {
  return (
    <div>
      <div className="lg:pb-10 w-full flex justify-center">
        <div>
          <h1 className="lg:text-5xl font-bold w-full text-center text-2xl mt-0 tracking-normal leading-tight">
            Main Skills
          </h1>
          <div className="flex flex-wrap justify-center gap-4 w-full mt-5">
            {mainSkill.map((skill, index) => (
              <CardSkill key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
