import {
  Button,
  Heading,
  HStack,
  VStack,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";
import useCountdownList from "./hooks/useCountdownList";
import CountdownTable from "./countdowns-table/countdowns-table";
import CountdownNewModal from "./countdown-edit/new-modal/new-modal";

export default function CountdownsList() {
  const { countdowns, isLoading, isError } = useCountdownList();

  if (isLoading) {
    return <Heading>Loading...</Heading>;
  }

  if (isError) {
    return <Heading>Error!</Heading>;
  }

  return (
    <Flex flexDir={"column"} bg="gray.50" minH={"calc(100vh - 32px)"}>
      <HStack w="100%" gap="1rem" p="1rem">
        <Heading as="h1" fontSize="2xl">
          Countdowns
        </Heading>
        <CountdownNewModal />
      </HStack>
      <VStack alignItems={"flex-start"} p="1rem">
        <CountdownTable countdowns={countdowns} />
      </VStack>
    </Flex>
  );
}
