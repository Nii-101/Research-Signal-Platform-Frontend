import { Check, Eye, TestTube, Watch, X } from "lucide-react";
import { Card } from "./ui/card";
import { Accordion, AccordionItem } from "./ui/accordion";
import { AccordionContent, AccordionTrigger } from "@radix-ui/react-accordion";

const SignalCard = () => {
  return (
    <Card className="flex flex-col bg-inherit border-2 border-gray-200 shadow-md rounded-xl px-2 md:px-6 py-6 md:py-8 space-y-6 md:space-y-7">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">SPY</h2>
          <span className="text-xs bg-[#d8e6f4] text-gray-600 px-2 py-1 rounded-lg">
            Volatility Premium
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-xs md:text-sm flex items-center gap-2  bg-[#d8e6f4] px-4 py-1 rounded-lg">
            <TestTube className="size-3  md:size-4"/>
            <span>In Lab</span>
          </div>
          <span className="text-xs md:text-sm bg-[#d8e6f4]  px-4 py-1 rounded-lg">
            New
          </span>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-4 gap-1 md:gap-3">
        <Card className="p-4 text-center bg-[#dcebf9] rounded-lg">
          <p className="text-xs text-gray-500">VRP Z-Score</p>
          <p className="text-xl font-bold text-gray-900">2.15</p>
        </Card>
        <Card className="p-4 text-center bg-[#dcebf9] rounded-lg">
          <p className="text-xs text-gray-500">VRP Ratio</p>
          <p className="text-xl font-bold text-gray-900">1.25</p>
        </Card>
        <Card className="p-4 text-center bg-[#dcebf9] rounded-lg">
          <p className="text-xs text-gray-500">Expected Return</p>
          <p className="text-xl font-bold text-gray-900">12.5%</p>
        </Card>
        <Card className="p-4 text-center  bg-[#d2e6fc] rounded-[3px] border border-slate-200">
          <p className="text-xs text-gray-500">Confidence</p>
          <p className="text-xl font-bold text-gray-900">85%</p>
        </Card>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="text-xl hover:text-black">
            <Check className="size-4 md:size-6"/>
          </button>
          <button className="text-xl hover:text-black">
            <Eye className="size-4 md:size-6"/>
          </button>
          <button className="text-xl hover:text-black">
            <X className="size-4 md:size-6"/>
          </button>
        </div>

        <Accordion collapsible type="single" className="text-xs md:text-base font-semibold">
          <AccordionItem value="item-1">
            <AccordionTrigger>Analysis</AccordionTrigger>
            <AccordionContent> Bruh</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Card>
  );
};

export default SignalCard;
