import { Box } from "@chakra-ui/react";
import SliderMarkTemplate from "../../primitives/slider-mark-template/slider-mark-template";
import PropertyWrapper from "../../layout/property-wrapper/property-wrapper";
import Label from "../../primitives/label/label";

interface FontSizeProps {
  label: string;
  fontSizeSelected: number;
  onFontSizeSelected: (fontSizeSelected: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

export default function FontSize({
  label,
  fontSizeSelected,
  onFontSizeSelected,
  min = 1,
  max = 10,
  step = 0.25,
}: FontSizeProps) {
  return (
    <PropertyWrapper>
      <Label>{label}</Label>
      <Box gridColumn={"2 / -1"}>
        <SliderMarkTemplate
          min={min}
          max={max}
          step={step}
          sliderValue={fontSizeSelected}
          onSliderChange={onFontSizeSelected}
        />
      </Box>
    </PropertyWrapper>
  );
}
