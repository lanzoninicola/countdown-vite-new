import { Box, Divider } from "@chakra-ui/react";
import useThemeTimerSelector from "../../countdown-theme-provider/hooks/useThemeTimerSelector";
import useThemeTitleSelector from "../../countdown-theme-provider/hooks/useThemeTitleSelector";
import GroupTitle from "./layout/group-title/group-title";
import PropertyGroupWrapper from "./layout/property-group-wrapper/property-group-wrapper";
import CountdownTitle from "./components/countdown-title/countdown-title";
import FontColor from "./components/font-color/font-color";
import FontFamily from "./components/font-family/font-family";
import FontSize from "./components/font-size/font-size";
import SeparatorChar from "./components/separator-char/separator-char";
import ShowSeparator from "./components/show-separator/show-separator";
import TargetDate from "./components/target-date/target-date";
import Timezone from "./components/timezone/timezone";
import Units from "./components/units/units";

export default function EditorProperties() {
  const title = useThemeTitleSelector();
  const timer = useThemeTimerSelector();

  return (
    <Box paddingInline={"1rem"}>
      {/* <PropertyGroupWrapper>
        <GroupTitle>General</GroupTitle>
        <TargetDate />
        <Timezone />
      </PropertyGroupWrapper> 
      <Divider marginBlock={".5rem"} />
      */}
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
        {/* 
        Disabled for the MVP
        <Units
          unitsShown={timer.unitsShown}
          onChangeUnitsShown={timer.setUnitsShown}
        /> 
        
        <Divider marginBlock={".5rem"} />
        */}

        <ShowSeparator
          showSeparator={timer.showSeparator}
          onChangeShowSeparator={timer.setShowSeparator}
        />
        <SeparatorChar
          showSeparator={timer.showSeparator}
          separatorChar={timer.separatorChar}
          onChangeSeparatorChar={timer.setSeparatorChar}
        />

        <Divider marginBlock={".5rem"} />

        <FontColor
          label={"Last unit color"}
          colorSelected={timer.lastUnitColor}
          onColorSelected={timer.setLastUnitColor}
        />

        <Divider marginBlock={".5rem"} />

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

        <Divider marginBlock={".5rem"} />

        <FontFamily
          label={"Label font"}
          fontFamily={timer.labelFontFamily}
          fontWeight={timer.labelFontWeight}
          onSelectFontFamily={timer.setLabelFontFamily}
          onSelectFontWeight={timer.setLabelFontWeight}
        />
        <FontSize
          label={"Label size"}
          fontSizeSelected={timer.labelFontSize}
          onFontSizeSelected={timer.setLabelFontSize}
        />
        <FontColor
          label={"Label color"}
          colorSelected={timer.labelFontColor}
          onColorSelected={timer.setLabelFontColor}
        />
      </PropertyGroupWrapper>
    </Box>
  );
}
