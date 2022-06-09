import { VStack } from "@chakra-ui/react";
import dayjs from "dayjs";
import useCountdownSelector from "../../../countdown-provider/hooks/useCountdownSelector";

import useCountdown from "../../hooks/useCountdown";
import { toMs } from "../../utils/time";
import CounterTitle from "../counter-title/counter-title";
import Counter from "../counter/counter";

// TODO: add padToZeros settings

const CountdownTimer = () => {
  const { targetDate } = useCountdownSelector();
  const targetDateDayJs = dayjs(targetDate);
  const targetDateMs = toMs(targetDateDayJs);

  const { days, hours, minutes, seconds } = useCountdown({ targetDateMs });

  return (
    <VStack>
      <CounterTitle />
      <Counter days={days} hours={hours} minutes={minutes} seconds={seconds} />
    </VStack>
  );
};

export default CountdownTimer;
