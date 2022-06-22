import { Box, Divider } from "@chakra-ui/react";
import GroupTitle from "./layout/group-title/group-title";
import PropertyGroupWrapper from "./layout/property-group-wrapper/property-group-wrapper";
import CountdownTitle from "./components/countdown-title/countdown-title";
import FontColor from "./components/font-color/font-color";
import FontFamily from "./components/font-family/font-family";
import FontSize from "./components/font-size/font-size";
import SeparatorChar from "./components/separator-char/separator-char";
import ShowSeparator from "./components/show-separator/show-separator";
import useThemeTimerSelector from "../../countdown-widget-theme-provider/hooks/useThemeTimerSelector";
import useThemeTitleSelector from "../../countdown-widget-theme-provider/hooks/useThemeTitleSelector";
import { useTranslation } from "react-i18next";

export default function EditorProperties() {
  const { t } = useTranslation();
  const title = useThemeTitleSelector();
  const timer = useThemeTimerSelector();

  return (
    <Box paddingInline={".25rem"}>
      <PropertyGroupWrapper>
        <GroupTitle>{t("editor.titleStyle")}</GroupTitle>
        <CountdownTitle />
        <FontFamily
          label={t("editor.textFont")}
          fontFamily={title.fontFamily}
          fontWeight={title.fontWeight}
          onSelectFontFamily={title.setFontFamily}
          onSelectFontWeight={title.setFontWeight}
        />
        <FontSize
          label={t("editor.textSize")}
          fontSizeSelected={title.fontSize}
          onFontSizeSelected={title.setFontSize}
        />
        <FontColor
          label={t("editor.textColor")}
          colorSelected={title.fontColor}
          onColorSelected={title.setFontColor}
        />
      </PropertyGroupWrapper>
      <Divider marginBlock={".5rem"} />
      <PropertyGroupWrapper>
        <GroupTitle>{t("editor.countownStyle")}</GroupTitle>
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
          label={t("editor.lastUnitColor")}
          colorSelected={timer.lastUnitColor}
          onColorSelected={timer.setLastUnitColor}
        />

        <Divider marginBlock={".5rem"} />

        <FontFamily
          label={t("editor.digitsFont")}
          fontFamily={timer.digitFontFamily}
          fontWeight={timer.digitFontWeight}
          onSelectFontFamily={timer.setDigitFontFamily}
          onSelectFontWeight={timer.setDigitFontWeight}
        />
        <FontSize
          label={t("editor.digitsSize")}
          fontSizeSelected={timer.digitFontSize}
          onFontSizeSelected={timer.setDigitFontSize}
        />
        <FontColor
          label={t("editor.digitsColor")}
          colorSelected={timer.digitFontColor}
          onColorSelected={timer.setDigitFontColor}
        />

        <Divider marginBlock={".5rem"} />

        <FontFamily
          label={t("editor.labelFont")}
          fontFamily={timer.labelFontFamily}
          fontWeight={timer.labelFontWeight}
          onSelectFontFamily={timer.setLabelFontFamily}
          onSelectFontWeight={timer.setLabelFontWeight}
        />
        <FontSize
          label={t("editor.labelSize")}
          fontSizeSelected={timer.labelFontSize}
          onFontSizeSelected={timer.setLabelFontSize}
        />
        <FontColor
          label={t("editor.labelColor")}
          colorSelected={timer.labelFontColor}
          onColorSelected={timer.setLabelFontColor}
        />
      </PropertyGroupWrapper>
    </Box>
  );
}
