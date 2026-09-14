import { RxCross2 } from "react-icons/rx";
import type { Technology } from "../types/TechnologiesType";



interface StackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}


const Stack = ( {stack,  onRemove, onRemoveAll}: StackProps) => {
  return (
    <div className="rounded-lg border border-dotted border-slate-300 p-6">

      {/* Header */}
      <div className="">
        <div>
          <h2 className="font-bold text-base">
            Your Stack
          </h2>

          <p className="text-xs text-[#94A3B8]">
            {stack.length}{" "}
            {stack.length === 1 ? "technology" : "technologies"} selected
          </p>
        </div>

      </div>

      {/* Empty Stack */}
      {stack.length === 0 ? (
        <div className="text-center rounded-lg border border-dotted border-slate-300 py-6 mt-4 text-xs text-[#94A3B8]">
          <p>Your stack is empty</p>
        </div>
      ) : (

        /* Stack Items */
        <div className="mt-4 space-y-3">

          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center justify-between rounded-lg border border-slate-200 p-3"
            >

              <div className="flex items-center gap-2">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-6 h-6 object-contain"
                />

                <span className="text-xs font-semibold">
                  {technology.name}
                </span>
              </div>

              <button
                onClick={() => onRemove(technology.id)}
                className=" text-red-500"
              >
                <RxCross2 />
              </button>
              

            </div>
          ))}
          <div className="w-full">
                {stack.length > 0 && (
                  <button
                    onClick={onRemoveAll}
                    className="w-full btn btn-wide text-sm text-red-500 font-semibold border-red-300 rounded-xl mt-8">
                    Remove All
                  </button>
                )}
          </div>

        </div>
      )}

    </div>
  );
};

export default Stack;
