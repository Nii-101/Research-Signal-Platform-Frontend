import { FilterIcon } from "lucide-react";
import { Toggle } from "./ui/toggle";
import SignalCard from "./SignalCard";
import { useEffect, useState } from "react";
import Loader from "./loader";
import { Tooltip, TooltipContent, TooltipProvider } from "./ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";

const MOCK_API_DELAY = 1000;

const mockSignals = [
  {
    ticker: "SPY",
    strategy: "Volatility Premium",
    vrpZScore: 2.15,
    vrpRatio: 1.25,
    expectedReturn: 12.5,
    confidence: 85,
    isNew: true,
    inLab: true,
  },
  {
    ticker: "QQQ",
    strategy: "Skew Trade",
    vrpZScore: 1.85,
    vrpRatio: 1.15,
    expectedReturn: 8.7,
    confidence: 75,
    isNew: false,
    inLab: false,
  },
  {
    ticker: "BRUH",
    strategy: "Test Strategy",
    vrpZScore: 1.95,
    vrpRatio: 1.18,
    expectedReturn: 10.2,
    confidence: 80,
    isNew: true,
    inLab: false,
  },
  {
    ticker: "ITACHI",
    strategy: "Hidden Leaf",
    vrpZScore: 1.95,
    vrpRatio: 1.18,
    expectedReturn: 10.2,
    confidence: 80,
    isNew: true,
    inLab: true,
  },
];

const SignalList = () => {
  const [signals, setSignals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showNewOnly, setShowNewOnly] = useState(false);
  const [openSignalTicker, setOpenSignalTicker] = useState(null);

  useEffect(() => {
    const fetchSignals = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, MOCK_API_DELAY));
        setSignals(mockSignals);
        setError(null);
      } catch (err) {
        setError("Failed to fetch signals. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchSignals();
  }, []);

  const displayedSignals = showNewOnly 
    ? signals.filter(signal => signal.isNew)
    : signals;

  const handleToggleOpen = (ticker) => (isOpen) => {
    setOpenSignalTicker(isOpen ? ticker : null);
  };

  if (loading) {
    return(
      <div className="min-h-screen flex items-center justify-center">
        <Loader/>
      </div>
    );  
  }

  return ( 
    <div className="space-y-8 md:space-y-12 px-4 py-8 lg:px-8">
      <header className="w-full flex items-center justify-between ">
        <h1 className="text-lg md:text-3xl font-bold md:font-bold">Research Signals</h1>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle 
                style={{ border: "2px solid #cedff5", borderRadius: "6px" }} 
                pressed={showNewOnly}
                onPressedChange={setShowNewOnly}
                aria-label="Show New Signals" 
                className="shadow-sm text-[0.68rem] sm:text-xs font-medium md:text-sm"
              >
                <div className="flex gap-2 items-center">
                  <FilterIcon size={14}/>
                  <p>{showNewOnly ? 'Show All' : 'Show New Only'}</p>
                </div>
              </Toggle>
            </TooltipTrigger>
            <TooltipContent className="bg-gray-800 px-4 py-2 tracking-wider ring-1 ring-white rounded-[2px] text-sm font-medium text-white shadow-md">
              <p className="m-0">Filter to show only new signals</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </header>

      <main className="w-full max-lg:space-y-3 lg:grid gap-6 grid-cols-2 grid-rows-auto">
        {displayedSignals.map((signal) => (
          <SignalCard 
            key={signal.ticker} 
            signal={signal}
            isOpen={openSignalTicker === signal.ticker}
            onToggleOpen={handleToggleOpen(signal.ticker)}
            className="h-auto" 
          />
        ))}
      </main> 
    </div>
   );
}
 
export default SignalList;