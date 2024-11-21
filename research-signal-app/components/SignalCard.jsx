import { Check, ExternalLink, Eye, TestTube, X } from "lucide-react";
import { Card } from "./ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { Tooltip } from "./ui/tooltip";
import { Button } from "./ui/button";
import SignalChart from "./SignalChart";
import { useState } from "react";

const SignalCard = ({ signal }) => {
  const [userAction, setUserAction] = useState(null);
  const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);

  const handleActionClick = (action) => {
    setUserAction(action);
  };

  const handleAnalysisToggle = () => {
    setIsAnalysisOpen(!isAnalysisOpen);
  };

  return (
    <Card
      style={{ border: "2px solid #cedff5" }}
      className="flex h-fit flex-col bg-inherit shadow-sm rounded-xl px-2 md:px-6 py-6 md:py-8 space-y-6 md:space-y-7"
    >


      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
        <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <h2 className="text-lg md:text-xl font-[750] cursor-help">{signal.ticker}</h2>
              </TooltipTrigger>
              <TooltipContent className="bg-gray-800 px-4 py-2 tracking-wider ring-1 ring-white rounded-[2px] text-sm font-medium text-white shadow-md">
                <p className="m-0">Ticker</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="text-xs md:text-sm bg-[#d8e6f4] font-bold px-2 py-1 rounded-[3px] cursor-help">
                  {signal.strategy}
                </span>
              </TooltipTrigger>
              <TooltipContent className="bg-gray-800 px-4 py-2 tracking-wider ring-1 ring-white rounded-[2px] text-sm font-medium text-white shadow-md">
                <p className="m-0">Trading Strategy</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex items-center gap-1 md:gap-2">
          {signal.inLab && (
            <div className="text-xs md:text-sm flex items-center gap-1 font-semibold bg-[#d8e6f4] px-2 sm:px-4 rounded-[3px]">
              <TestTube className="size-3 md:size-3.5" />
              <span>In Lab</span>
            </div>
          )}
          {signal.isNew && (
            <span className="text-xs md:text-sm bg-[#d8e6f4] font-semibold px-2 sm:px-4 rounded-[3px]">
              New
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
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
          className="p-1 py-3 text-center bg-[#d2e6fc] rounded-[3px]"
        >
          <p className="text-xs text-gray-500">Confidence</p>
          <p className="md:text-xl font-bold text-gray-900">
            {signal.confidence.toFixed(0)}%
          </p>
        </Card>
      </div>

      <div className="flex items-center justify-between">
        {userAction ? (
          <div 
            className={`
              ${userAction === 'Taken' ? 'text-[#219560]' : 
                userAction === 'Watching' ? 'text-yellow-600' : 'text-red-600'} 
              border px-3 font-semibold rounded-[6px] border-[#cedff5]
            `}
          >
            {userAction}
          </div>
        ) : (
          <div className="flex items-center gap-4 md:gap-6">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button onClick={() => handleActionClick('Taken')} className="text-xl hover:text-black">
                    <Check className="size-4 md:size-6 hover:text-green-600" />
                  </button>
                </TooltipTrigger>
              <TooltipContent className="bg-[#219560] px-4 py-2 tracking-wider ring-1 ring-white rounded-[2px] text-sm font-medium text-white shadow-md">
                  <p className="m-0">Take</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button onClick={() => handleActionClick('Watching')} className="text-xl hover:text-black">
                    <Eye className="size-4 md:size-6 hover:text-blue-500" />
                  </button>
                </TooltipTrigger>
                <TooltipContent className="bg-blue-700/80 px-4 tracking-wider  py-2 ring-1 ring-white rounded-[2px] text-sm font-medium text-white shadow-md">
                  <p className="m-0">Watch</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button onClick={() => handleActionClick('Passed')} className="text-xl hover:text-black">
                    <X className="size-4 md:size-6 hover:text-red-500" />
                  </button>
                </TooltipTrigger>
                <TooltipContent className="bg-red-700 py-2 px-4 tracking-wider ring-1 ring-white rounded-[2px] text-sm font-medium text-white shadow-md">
                  <p className="m-0">Pass</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )}

        <Accordion 
          type="single" 
          collapsible 
          open={isAnalysisOpen}
          onValueChange={() => handleAnalysisToggle()}
          className=""
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex gap-2">Analysis</AccordionTrigger>
            <AccordionContent className="pt-6">
              <div className="max-sm:w-full grid grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 p-1.5 sm:p-4 rounded-lg">
                  <p className="text-xs text-gray-600 mb-1">Historical Win Rate</p>
                  <p className="font-bold text-gray-900">76%</p>
                </div>
                <div className="bg-blue-50 p-1.5 sm:p-4 rounded-lg">
                  <p className="text-xs text-gray-600 mb-1">Avg. Hold Time</p>
                  <p className="font-bold text-gray-900">14.3 days</p>
                </div>
                <div className="bg-blue-50 p-1.5 sm:p-4 rounded-lg">
                  <p className="text-xs text-gray-600 mb-1">Risk Score</p>
                  <p className="font-bold text-gray-900">Medium</p>
                </div>
              </div>

              <SignalChart/>

              <div className="border-t pt-4">
                <Button
                  variant="outline"
                  className="w-full justify-between text-blue-600 hover:text-blue-700"
                  onClick={() => window.open('#', '_blank')}
                >
                  <span>View Complete Analysis</span>
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Card>
  );
};

export default SignalCard;