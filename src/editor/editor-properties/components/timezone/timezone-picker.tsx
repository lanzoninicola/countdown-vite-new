import { Select, ThemingProps } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import useCountdownSelector from "../../../../countdown-widget-provider/hooks/useCountdownSelector";
import TIMEZONES_LIST from "../../constants/timezones";
import PropertyWrapper from "../../layout/property-wrapper/property-wrapper";
import Label from "../../primitives/label/label";

interface TargetTimezoneProps {
  size: ThemingProps<"FormLabel">["size"] | ThemingProps<"Input">["size"];
}

export default function TimezonePicker({ size }: TargetTimezoneProps) {
  const { t } = useTranslation();
  const { targetTimezone, setTargetTimezone } = useCountdownSelector();

  function onChangeTimezone(e: React.ChangeEvent<HTMLSelectElement>) {
    setTargetTimezone(e.target.value);
  }

  return (
    <PropertyWrapper firstColumnW="120px" columns={4}>
      <Label size={size} htmlFor="timezone">
        {t("editor.timezone").capitalize()}
      </Label>
      <Select
        id="timezone-picker"
        size={size}
        placeholder="Select option"
        gridColumn={"2 / 5"}
        defaultValue={targetTimezone}
        onChange={onChangeTimezone}
        className="theme-font"
        bg="white"
        fontSize={"sm"}
        borderRadius={"md"}
      >
        {TIMEZONES_LIST.map((tz, idx) => {
          return (
            <option key={idx} value={tz}>
              {tz}
            </option>
          );
        })}
      </Select>
    </PropertyWrapper>
  );
}
