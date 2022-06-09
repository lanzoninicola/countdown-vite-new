import { Divider } from "@chakra-ui/react";
import GroupTitle from "../../layout/group-title/group-title";
import PropertyGroupWrapper from "../../layout/property-group-wrapper/property-group-wrapper";
import useTimerSelector from "../countdown-provider/hooks/useTimerSelector";
import useTitleSelector from "../countdown-provider/hooks/useTitleSelector";
import CountdownTitle from "./properties/countdown-title/countdown-title";
import FontColor from "./properties/font-color/font-color";
import FontFamily from "./properties/font-family/font-family";
import FontSize from "./properties/font-size/font-size";
import TargetDate from "./properties/target-date/target-date";
import Timezone from "./properties/timezone/timezone";
import Units from "./properties/units/units";

export default function PropertyEditor() {
  const title = useTitleSelector();
  const timer = useTimerSelector();

  return (
    <>
      <PropertyGroupWrapper>
        <GroupTitle>General</GroupTitle>
        <TargetDate />
        <Timezone />
      </PropertyGroupWrapper>
      <Divider marginBlock={".5rem"} />
      <PropertyGroupWrapper>
        <GroupTitle>Title style</GroupTitle>
        <CountdownTitle />
        <FontFamily
          label={"Text font"}
          fontFamily={title.fontFamily}
          fontWeight={title.fontWeight}
          onSelectFontFamily={title.setFontFamily}
          onSelectFontWeight={title.setFontWeight}
        />
        <FontSize
          label={"Text size"}
          fontSizeSelected={title.fontSize}
          onFontSizeSelected={title.setFontSize}
        />
        <FontColor
          label={"Text color"}
          colorSelected={title.fontColor}
          onColorSelected={title.setFontColor}
        />
      </PropertyGroupWrapper>
      <Divider marginBlock={".5rem"} />
      <PropertyGroupWrapper>
        <GroupTitle>Countdown Style</GroupTitle>
        <Units />
        <FontFamily
          label={"Digits font"}
          fontFamily={timer.digitFontFamily}
          fontWeight={timer.digitFontWeight}
          onSelectFontFamily={timer.setDigitFontFamily}
          onSelectFontWeight={timer.setDigitFontWeight}
        />
        <FontSize
          label={"Digits size"}
          fontSizeSelected={timer.digitFontSize}
          onFontSizeSelected={timer.setDigitFontSize}
        />
        <FontColor
          label={"Digits color"}
          colorSelected={timer.digitFontColor}
          onColorSelected={timer.setDigitFontColor}
        />
        <FontColor
          label={"Last digit color"}
          colorSelected={timer.lastDigitColor}
          onColorSelected={timer.setLastDigitColor}
        />
      </PropertyGroupWrapper>
    </>
  );
}
