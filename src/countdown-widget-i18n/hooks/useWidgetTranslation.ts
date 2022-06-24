import useSettingsUnitLabelLng from "../../countdown-provider/hooks/settings/useSettingsUnitLabelLng";
import TRANSLATIONS from "../constants/translations";
import { WidgetTranslation } from "../types";

interface UseWidgetTranslation {
  /** function that let you translate the label of countdown unit */
  tw: (slice: keyof WidgetTranslation) => string;
}

/**
 *
 * @returns A function that let you translate the label of countdown unit
 * @example
 *
 * const {tw} = useWidgetTranslation();
 *
 * tw("month"); // "Month"
 */
export default function useWidgetTranslation(): UseWidgetTranslation {
  const { unitLabelLanguage } = useSettingsUnitLabelLng();

  function tw(slice: keyof WidgetTranslation): string {
    const translation = TRANSLATIONS[unitLabelLanguage];

    if (!translation) {
      throw new Error(`No translation found for locale ${unitLabelLanguage}`);
    }

    return translation[slice].capitalize() || "";
  }

  return { tw };
}
