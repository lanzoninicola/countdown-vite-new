import { Button, Heading, HStack, VStack, Text } from "@chakra-ui/react";
import useCountdownList from "./hooks/useCountdownList";
import CountdownTable from "./countdowns-table/countdowns-table";

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
      <HStack w="100%" gap="1rem">
        <Heading as="h1" fontSize="2xl">
          Countdowns
        </Heading>
        <Button size="sm">Add new</Button>
      </HStack>
      <VStack alignItems={"flex-start"}>
        <CountdownTable countdowns={countdowns} />
      </VStack>
    </>
  );
}
