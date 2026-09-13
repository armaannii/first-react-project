import { useState } from "react";
import type { Technology } from "../types/TechnologiesType";

const TechnologiesCard = ({technologies}: {technologies: Technology[]}) => {
  
    const [isSelected, setIsSelected] = useState(false);
  
    return (
    <>
      {technologies.map((technology: Technology) => {
        return (
          <div className="w-[200px] rounded-xl  bg-white p-4 border border-slate-100 bg-white p-5 shadow-[0_2px_10px_rgba(15,23,42,0.04)]">
            {/* Top */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex h-9 w-9 items-center justify-center">
                <img
                  src={technology.icon}
                  alt={`${technology.name} logo`}
                  className="max-h-8 max-w-8 object-contain"
                  loading="lazy"
                />
              </div>
              <span className="rounded-full border border-slate-100 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold text-slate-500">
                {technology.badge}
              </span>
            </div>

            {/* Content */}
            <h2 className="mt-3 text-sm font-bold text-[#0F172A]">{technology.name}</h2>
            <p className="mt-1 text-[9px] leading-4 text-[#64748B]">{technology.description}</p>

            {/* Info */}
            <div className="mt-3 flex items-center justify-between text-[8px]">
              <span className="rounded bg-gray-100 px-2 py-1 text-[#475569]">
                Frontend
              </span>

              <span className="text-[#64748B]">{technology.difficulty}</span>

              <span className="text-[#475569]"><span className="text-yellow-400">★</span> {technology.rating} </span>
            </div>

            {/* Button */}
            <button type="button" onClick={() => setIsSelected(true)} disabled={isSelected} 
                className="mt-3 w-full rounded-md bg-[#0F0B20] py-2 text-[9px] text-white">
              Add to Stack
            </button>
          </div>
        );
      })}
    </>
  );
};

export default TechnologiesCard;
