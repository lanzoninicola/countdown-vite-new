import { Grid } from "@chakra-ui/react";
import useThemeTimerSelector from "../../../countdown-theme-provider/hooks/useThemeTimerSelector";

import { RemainingTime } from "../../types";
import Digit from "./digit/digit";

export default function Counter({
  days,
  hours,
  minutes,
  seconds,
}: RemainingTime) {
  const {
    unitsShown,
    digitFontSize,
    digitFontFamily,
    digitFontWeight,
    digitFontColor,
    lastDigitColor,
  } = useThemeTimerSelector();

  //TODO: based on configuration some values might be hidden
  // TODO: check the responsiveness of the timer
  //TODO: check if the digit has two digits

  return (
    <Grid
      gridTemplateColumns={"1fr .1fr 1fr .1fr 1fr .1fr 1fr"}
      gridTemplateRows={"auto"}
      style={{
        fontSize: digitFontSize,
        fontFamily: digitFontFamily,
        color: digitFontColor,
      }}
    >
      <Digit value={days} label={"Days"} isDanger={days <= 3} />
      <span>:</span>
      <Digit value={hours} label={"Hours"} isDanger={false} />
      <span>:</span>
      <Digit value={minutes} label={"Mins"} isDanger={false} />
      <span>:</span>
      <Digit value={seconds} label={"Seconds"} isDanger={false} />
    </Grid>
  );
}
