import { VStack } from "@chakra-ui/react";

import useCountdown from "../../hooks/useCountdown";
import CounterTitle from "../counter-title/counter-title";
import Counter from "../counter/counter";

// TODO: add padToZeros settings

const CountdownTimer = () => {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <VStack>
      <CounterTitle />
      <Counter days={days} hours={hours} minutes={minutes} seconds={seconds} />
    </VStack>
  );
};

export default CountdownTimer;
