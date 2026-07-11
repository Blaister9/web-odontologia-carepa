import { createContext, ReactNode, useContext, useMemo, useState } from "react";

import {
  ConversionOption,
  getJourney,
  JourneyIntentId
} from "@/data/conversionJourneys";

export type JourneyInitialState = {
  intentId: JourneyIntentId;
  optionId: string | null;
};

type JourneyContextValue = {
  intentId: JourneyIntentId | null;
  selectedOption: ConversionOption | null;
  selectIntent: (id: JourneyIntentId) => void;
  selectOption: (option: ConversionOption | null) => void;
  reset: () => void;
};

const JourneyContext = createContext<JourneyContextValue | null>(null);

function resolveInitialState(initialState: JourneyInitialState | null) {
  const journey = getJourney(initialState?.intentId ?? null);
  const selectedOption = initialState?.optionId
    ? journey?.options.find((option) => option.id === initialState.optionId) ?? null
    : null;

  return {
    intentId: journey?.id ?? null,
    selectedOption
  };
}

export function JourneyProvider({
  children,
  initialState = null
}: {
  children: ReactNode;
  initialState?: JourneyInitialState | null;
}) {
  const initialSelection = resolveInitialState(initialState);
  const [intentId, setIntentId] = useState<JourneyIntentId | null>(
    initialSelection.intentId
  );
  const [selectedOption, setSelectedOption] = useState<ConversionOption | null>(
    initialSelection.selectedOption
  );

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
