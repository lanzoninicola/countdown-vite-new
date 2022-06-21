import { Input, ThemingProps } from "@chakra-ui/react";

import PropertyWrapper from "../../layout/property-wrapper/property-wrapper";
import Label from "../../primitives/label/label";

interface TargetDateProps {
  size: ThemingProps<"FormLabel">["size"] | ThemingProps<"Input">["size"];
}

export default function TargetDate({ size }: TargetDateProps) {
  function onChangeDate(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }

  return (
    <PropertyWrapper>
      <Label size={size} minW="">
        Target Date
      </Label>
      <Input
        size={size as ThemingProps<"Input">["size"]}
        type="datetime-local"
        id="target-date"
        name="target-date"
        onChange={onChangeDate}
        gridColumn={"2 / -1"}
        className="theme-font"
        fontSize={"sm"}
      />
    </PropertyWrapper>
  );
}
