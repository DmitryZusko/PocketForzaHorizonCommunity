import React, { useCallback, useEffect, useState } from "react";
import { ICustomRangeSliderComponentHook } from "../../types";

export default function useCustomRangeSliderComponent({
  min,
  max,
  validRange,
  handleRangeChange,
}: ICustomRangeSliderComponentHook) {
  const [selectedRange, setSelectedRange] = useState<number[]>([]);

  const handleSignleChange = useCallback(
    (index: number) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setSelectedRange(
        selectedRange.map((price, i) => {
          if (i === index) return parseInt(event.target.value);
          return price;
        }),
      );
    },
    [selectedRange, setSelectedRange],
  );

  const validateMin = () => {
    let [newMin, newMax] = selectedRange;

    if (newMin < min) newMin = min;
    if (newMin > newMax) newMin = newMax;
    handleRangeChange(null, [newMin, newMax]);
  };

  const validateMax = () => {
    let [newMin, newMax] = selectedRange;

    if (newMax > max) newMax = max;
    if (newMax < newMin) newMax = newMin;
    handleRangeChange(null, [newMin, newMax]);
  };

  useEffect(() => {
    setSelectedRange([validRange[0], validRange[1]]);
  }, [validRange]);
  return { selectedRange, handleSignleChange, validateMin, validateMax };
}
