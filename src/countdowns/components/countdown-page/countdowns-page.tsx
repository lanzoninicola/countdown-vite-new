import { Flex, Heading, HStack, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import CountdownNewModal from "../modal-new-countdown/modal-new-countdown";
import CountdownsTable from "../../countdowns-table/countdown-table";

import useCountdownsList from "../../countdowns-table/hooks/useCountdownList";
import Pagination from "../pagination/pagination";

export default function CountdownsPage() {
  const { t } = useTranslation();
  const { countdowns, isLoading, isError } = useCountdownsList();

  if (isLoading) {
    return <Heading>Loading...</Heading>;
  }

  if (isError) {
    return <Heading>Error!</Heading>;
  }

  return (
    <Flex
      id="countdowns-list"
      flexDir={"column"}
      bg="gray.50"
      minH={"calc(100vh - 32px)"}
    >
      <HStack w="100%" gap="1rem" p="1rem">
        <Heading as="h1" fontSize="2xl">
          {t("countdowns.title")}
        </Heading>
        <CountdownNewModal />
      </HStack>
      <VStack alignItems={"flex-start"} p="1rem">
        <Pagination data={countdowns}>
          <CountdownsTable />
        </Pagination>
      </VStack>
    </Flex>
  );
}
