import { use } from "react";
import type { Technology } from "../types/TechnologiesType";
import TechnologiesCard from "./TechnologiesCard";
import Stack from "./Stack";
// import StackSidebar from "./Stack";

interface TechnologyProps {
  technologiesPromise: Promise<Technology[]>;
}

const Technologies = ({ technologiesPromise }: TechnologyProps) => {
  const technologies = use(technologiesPromise);

  return (
    <div className="container mx-auto ">
      <div>
        <h2 className="text-4xl font-extrabold">
            Explore the {" "}
            <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
                Technologies
            </span>
        </h2>
        <p className="text-[#64748B] leading-10">
            Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="grid grid-cols-12 my-10">
        <div className="col-span-9">
            <div className="grid grid-cols-3 gap-y-10">
                <TechnologiesCard technologies={technologies} />
            </div>
        </div>
        <div className="col-span-3">
            <Stack></Stack>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
