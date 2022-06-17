import { Select, ThemingProps } from "@chakra-ui/react";
import PropertyWrapper from "../../../../layout/property-wrapper/property-wrapper";
import "../../../../../style/global.css";
import Label from "../../primitives/label/label";
import SelectField from "../../primitives/select-field/select-field";

interface TargetDateProps {
  size: ThemingProps<"FormLabel">["size"] | ThemingProps<"Input">["size"];
}

export default function Timezone({ size }: TargetDateProps) {
  function onChangeDate(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }

  return (
    <PropertyWrapper>
      <Label size={size} htmlFor="timezone">
        Timezone
      </Label>
      <Select size={size} placeholder="Select option" gridColumn={"2 / -1"}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </PropertyWrapper>
  );
}
