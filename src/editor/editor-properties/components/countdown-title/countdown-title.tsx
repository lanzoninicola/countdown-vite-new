import { Input } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import useThemeTitleSelector from "../../../../countdown-widget-theme-provider/hooks/useThemeTitleSelector";
import PropertyWrapper from "../../layout/property-wrapper/property-wrapper";
import Label from "../../primitives/label/label";

export default function CountdownTitle() {
  const { t } = useTranslation();
  const { text, setText } = useThemeTitleSelector();

  return (
    <PropertyWrapper>
      <Label>{t("editor.text")}</Label>
      <Input
        size={"xs"}
        type="text"
        title="countdownName"
        name="countdownName"
        placeholder={t("editor.titlePlaceholder")}
        gridColumn={"2 / -1"}
        defaultValue={text}
        onChange={(e) => setText(e.target.value)}
        className="theme-font"
      />
    </PropertyWrapper>
  );
}
