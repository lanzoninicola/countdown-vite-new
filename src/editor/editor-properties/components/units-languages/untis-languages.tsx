import { Select } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import useSettingsUnitLabelLng from "../../../../countdown-provider/hooks/settings/useSettingsUnitLabelLng";
import LANGUAGES from "../../../../countdown-widget-i18n/constants/languages";
import { Language } from "../../../../countdown-widget-i18n/types";
import PropertyWrapper from "../../layout/property-wrapper/property-wrapper";
import Label from "../../primitives/label/label";

export default function UnitsLanguages() {
  const { setUnitLabelLanguage } = useSettingsUnitLabelLng();
  const { t } = useTranslation();

  return (
    <PropertyWrapper>
      <Label>{t("editor.labelLanguage")}</Label>
      <Select
        variant="outline"
        size={"sm"}
        gridColumn={"2 / -1"}
        className="theme-font"
        onChange={(e) =>
          setUnitLabelLanguage(e.target.value as Language["locale"])
        }
      >
        {LANGUAGES.map((language, idx) => {
          return (
            <option key={idx} value={language.locale}>
              {language.name}
            </option>
          );
        })}
      </Select>
    </PropertyWrapper>
  );
}
