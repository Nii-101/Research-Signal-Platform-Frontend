import { Check, Eye, TestTube, Watch, X } from "lucide-react";
import { Card } from "./ui/card";
import { Accordion, AccordionItem } from "./ui/accordion";
import { AccordionContent, AccordionTrigger } from "@radix-ui/react-accordion";
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { Tooltip } from "./ui/tooltip";

const SignalCard = ({ signal }) => {
  return (
    <Card
      style={{ border: "2px solid #cedff5" }}
      className="flex flex-col bg-inherit shadow-sm rounded-xl px-2 md:px-6 py-6 md:py-8 space-y-6 md:space-y-7"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-lg md:text-xl font-bold">{signal.ticker}</h2>
          <span className="text-xs md:text-sm bg-[#d8e6f4] font-bold px-2 py-1 rounded-[3px]">
            {signal.strategy}
          </span>
        </div>
        <div className="flex items-center gap-0.5 md:gap-2">
          {signal.inLab && (
            <div className="text-xs md:text-sm flex items-center gap-1 font-semibold bg-[#d8e6f4] px-4 rounded-[3px]">
              <TestTube className="size-3  md:size-3.5 " />
              <span>In Lab</span>
            </div>
          )}
          {signal.isNew && (
            <span className="text-xs md:text-sm bg-[#d8e6f4] font-semibold  px-4  rounded-[3px]">
              New
            </span>
          )}
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-4 gap-1 max-md:overflow-x-scroll md:gap-3">
        <Card className="p-1 py-3 text-center bg-[#dcebf9] rounded-lg">
          <p className="text-xs text-gray-500">VRP Z-Score</p>
          <p className="md:text-xl font-bold text-gray-900">
            {signal.vrpZScore.toFixed(2)}
          </p>
        </Card>
        <Card className="p-1 py-3 text-center bg-[#dcebf9] rounded-lg">
          <p className="text-xs text-gray-500">VRP Ratio</p>
          <p className="md:text-xl font-bold text-gray-900">
            {signal.vrpRatio.toFixed(2)}
          </p>
        </Card>
        <Card className="p-1 py-3 text-center bg-[#dcebf9] rounded-lg">
          <p className="text-xs text-gray-500">Expected Return</p>
          <p className="md:text-xl font-bold text-gray-900">
            {signal.expectedReturn.toFixed(1)}
          </p>
        </Card>
        <Card
          style={{ border: "1px solid #cedff5" }}
          className="p-1 py-3 text-center  bg-[#d2e6fc] rounded-[3px]"
        >
          <p className="text-xs text-gray-500">Confidence</p>
          <p className="md:text-xl font-bold text-gray-900">
            {signal.confidence.toFixed(0)}%
          </p>
        </Card>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="text-xl hover:text-black">
                  <Check className="size-4 md:size-6 hover:text-green-600" />
                </button>
              </TooltipTrigger>
              <TooltipContent className="bg-emerald-800 px-4 tracking-wider ring-1 ring-white rounded-[2px] text-sm font-medium text-white shadow-md">
                <p className="m-0">Take</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="text-xl hover:text-black">
                  <Eye className="size-4 md:size-6 hover:text-blue-500" />
                </button>
              </TooltipTrigger>
              <TooltipContent className="bg-blue-700/80 px-4 tracking-wider ring-1 ring-white rounded-[2px] text-sm font-medium text-white shadow-md">
                <p className="m-0">Watch</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="text-xl hover:text-black">
                  <X className="size-4 md:size-6 hover:text-red-500" />
                </button>
              </TooltipTrigger>
              <TooltipContent className="bg-red-700 px-4 tracking-wider ring-1 ring-white rounded-[2px] text-sm font-medium text-white shadow-md">
                <p className="m-0">Pass</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

          <Accordion type="single" collapsible className="">
            <AccordionItem value="item-1">
              <AccordionTrigger>Analysis</AccordionTrigger>
              <AccordionContent>
                Analysis Content
              </AccordionContent>
            </AccordionItem>
          </Accordion>
      </div>
    </Card>
  );
};

export default SignalCard;
