import { VStack } from "@chakra-ui/react";
import useSettingsContext from "../../../countdown-provider/hooks/settings/useSettingsContext";

import useCountdown from "../../hooks/useCountdown";
import CounterTitle from "../counter-title/counter-title";
import Counter from "../counter/counter";

// TODO: add padToZeros settings

const CountdownTimer = () => {
  const {
    targetDate: HTMLInputTargetDate,
    targetTimezone: HTMLInputTargetTimezone,
  } = useSettingsContext();

  // const [isLoading, setIsLoading] = useState(true);

  const { days, hours, minutes, seconds } = useCountdown({
    HTMLInputTargetDate,
    HTMLInputTargetTimezone,
  });

  // TODO: avoid flickering from initial state to current state, paying attention when the countdown is finished
  // instead to work here I think is better to work to the last leaf of the tree, when the font-size is changed
  // because I can support here the change state but after we will have another flickering when the style will change
  // useLayoutEffect(() => {
  //   if (days > 0 && hours > 0 || minutes > 0 || seconds > 0) {
  //     setIsLoading(false);
  //   }
  // }, [days, hours, minutes, seconds]);

  return (
    <VStack className="countdown" p="1rem" bg="white" w={"max-content"}>
      <CounterTitle />
      <Counter days={days} hours={hours} minutes={minutes} seconds={seconds} />
    </VStack>
  );
};

export default CountdownTimer;
