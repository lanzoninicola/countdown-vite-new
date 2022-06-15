import { Box, Text } from "@chakra-ui/react";
import { Countdown } from "../../types";

export default function CountdownItem({ countdown }: { countdown: Countdown }) {
  return (
    <Box>
      <Text>{countdown.name}</Text>
      <Text>{countdown.description}</Text>
    </Box>
  );
}
