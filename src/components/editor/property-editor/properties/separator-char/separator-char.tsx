import "../../../../../style/global.css";

import { Input } from "@chakra-ui/react";

import PropertyWrapper from "../../../../layout/property-wrapper/property-wrapper";
import Label from "../../primitives/label/label";

interface SeparatorCharProps {
  showSeparator: boolean;
  separatorChar: string;
  onChangeSeparatorChar: (separatorChar: string) => void;
}

export default function SeparatorChar({
  showSeparator,
  separatorChar,
  onChangeSeparatorChar,
}: SeparatorCharProps) {
  return (
    <PropertyWrapper>
      <Label htmlFor="separatorChar">Separator</Label>
      <Input
        id="separatorChar"
        name="separatorChar"
        size="sm"
        maxLength={1}
        onChange={(e) => {
          onChangeSeparatorChar(e.target.value);
        }}
        aria-label="Define the separtor for the timer"
        isDisabled={showSeparator === false}
        value={separatorChar}
        className="theme-font"
        w="2rem"
      />
    </PropertyWrapper>
  );
}