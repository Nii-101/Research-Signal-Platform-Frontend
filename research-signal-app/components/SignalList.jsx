import { FilterIcon } from "lucide-react";
import { Toggle } from "./ui/toggle";
import { Card } from "./ui/card";
import SignalCard from "./SignalCard";

const SignalList = () => {
  return ( 
    <div className="space-y-5 px-4 py-4 lg:px-8">
      <header className="w-full flex items-center justify-between ">
        <h1 className="text-lg md:text-3xl lg:text-4xl font-bold md:font-bold">Research Signals</h1>
        <Toggle aria-label="" className="shadow-sm text-[0.68rem] sm:text-xs font-medium md:text-sm">
          <div className="flex gap-2 items-center">
            <FilterIcon size={14}/>
            <p>Show New Only</p>
          </div>
        </Toggle>
      </header>

      <main className="w-full space-y-3 lg:grid gap-6 grid-cols-2 ">
        <SignalCard/>
      </main> 
    </div>
   );
}
 
export default SignalList;