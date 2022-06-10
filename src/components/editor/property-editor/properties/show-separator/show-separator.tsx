import "../../../../../style/global.css";

import { Checkbox } from "@chakra-ui/react";

import PropertyWrapper from "../../../../layout/property-wrapper/property-wrapper";
import Label from "../../primitives/label/label";

interface ShowSeparatorProps {
  showSeparator: boolean;
  onChangeShowSeparator: (showSeparator: boolean) => void;
}

export default function showSeparator({
  showSeparator,
  onChangeShowSeparator,
}: ShowSeparatorProps) {
  return (
    <PropertyWrapper>
      <Label htmlFor="showSeparator">Show separator</Label>
      <Checkbox
        id="showSeparator"
        name="showSeparator"
        size="sm"
        isChecked={showSeparator}
        onChange={(e) => {
          onChangeShowSeparator(e.target.checked);
        }}
        aria-label="Show or not the separator in the timer"
      />
    </PropertyWrapper>
  );
}
