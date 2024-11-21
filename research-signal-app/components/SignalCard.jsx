import { Check, Eye, Watch, X } from "lucide-react";
import { Card } from "./ui/card";
import { Accordion, AccordionItem } from "./ui/accordion";
import { AccordionContent, AccordionTrigger } from "@radix-ui/react-accordion";

const SignalCard = () => {
  return (
    <Card className="flex flex-col bg-inherit border-2 border-gray-200 shadow-md rounded-xl p-6 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">SPY</h2>
          <span className="text-xs text-gray-600 px-2 py-1 rounded-full">
            Volatility Premium
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs bg-gray-300 px-2 py-1 rounded-md">
            In Lab
          </span>
          <span className="text-xs  px-2 py-1 rounded-md">
            New
          </span>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-4 gap-1 md:gap-3">
        <Card className="p-4 text-center border border-gray-300 rounded-lg">
          <p className="text-xs text-gray-500">VRP Z-Score</p>
          <p className="text-xl font-bold text-gray-900">2.15</p>
        </Card>
        <Card className="p-4 text-center border border-gray-300 rounded-lg">
          <p className="text-xs text-gray-500">VRP Ratio</p>
          <p className="text-xl font-bold text-gray-900">1.25</p>
        </Card>
        <Card className="p-4 text-center border border-gray-300 rounded-lg">
          <p className="text-xs text-gray-500">Expected Return</p>
          <p className="text-xl font-bold text-gray-900">12.5%</p>
        </Card>
        <Card className="p-4 text-center border border-gray-300 rounded-lg">
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

        <Accordion collapsible type="single" className="text-xs">
          <AccordionItem>
            <AccordionTrigger>Analysis</AccordionTrigger>
            <AccordionContent> Bruh</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Card>
  );
};

export default SignalCard;
