import { Button, Heading, HStack, VStack, Text } from "@chakra-ui/react";
import useCountdownList from "../hooks/useCountdownList";
import { Countdown } from "../types";
import CountdownItem from "./countdown-item/countdown-item";

export default function CountdownsList() {
  const { countdowns, isLoading, isError } = useCountdownList();

  if (isLoading) {
    return <Heading>Loading...</Heading>;
  }

  if (isError) {
    return <Heading>Error!</Heading>;
  }

  return (
    <>
      <HStack w="100%" justify={"space-between"}>
        <Heading as="h1">Countdowns</Heading>
        <Button>Add new</Button>
      </HStack>
      <VStack>
        {countdowns?.map((countdown: Countdown) => (
          <CountdownItem key={countdown.id} countdown={countdown} />
        ))}
      </VStack>
    </>
  );
}
