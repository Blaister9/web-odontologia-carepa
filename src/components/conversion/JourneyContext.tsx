import { createContext, ReactNode, useContext, useMemo, useState } from "react";

import { ConversionOption, JourneyIntentId } from "@/data/conversionJourneys";

type JourneyContextValue = {
  intentId: JourneyIntentId | null;
  selectedOption: ConversionOption | null;
  selectIntent: (id: JourneyIntentId) => void;
  selectOption: (option: ConversionOption | null) => void;
  reset: () => void;
};

const JourneyContext = createContext<JourneyContextValue | null>(null);

export function JourneyProvider({ children }: { children: ReactNode }) {
  const [intentId, setIntentId] = useState<JourneyIntentId | null>(null);
  const [selectedOption, setSelectedOption] = useState<ConversionOption | null>(null);

  const value = useMemo<JourneyContextValue>(
    () => ({
      intentId,
      selectedOption,
      selectIntent: (id) => {
        setIntentId(id);
        setSelectedOption(null);
      },
      selectOption: setSelectedOption,
      reset: () => {
        setIntentId(null);
        setSelectedOption(null);
      }
    }),
    [intentId, selectedOption]
  );

  return <JourneyContext.Provider value={value}>{children}</JourneyContext.Provider>;
}

export function useJourney() {
  const context = useContext(JourneyContext);
  if (!context) throw new Error("useJourney must be used within JourneyProvider");
  return context;
}
