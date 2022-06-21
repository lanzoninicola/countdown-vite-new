import { HStack, Td, Tr } from "@chakra-ui/react";
import dayjs from "dayjs";

import ButtonSettings from "../../primitives/button-settings/button-settings";
import DeleteModal from "../../../countdown-edit/delete-modal/delete-modal";
import EditModal from "../../../countdown-edit/edit-modal/edit-modal";
import TableCellText from "../../primitives/table-cell-text/table-cell-text";
import { Countdown } from "../../../../countdown-widget/types";
import useCurrentCountdownSelector from "../../../../countdown-provider/hooks/useCurrentCountdownSelector";

interface TableRowProps {
  countdown: Countdown;
}

//TODO: how to present the Date in the right format?

export default function TableRow({ countdown }: TableRowProps) {
  const { id, name, description, created_at, updated_at } = countdown;
  const { setCurrentCountdown } = useCurrentCountdownSelector();

  const createdAt = dayjs(created_at).format("DD/MM/YYYY");
  const updatedAt = updated_at && dayjs(updated_at).format("DD/MM/YYYY");

  return (
    <Tr>
      <Td maxW="12rem" overflow={"hidden"} textOverflow={"ellipsis"}>
        <TableCellText>{id}</TableCellText>
      </Td>
      <Td maxW="12rem" overflow={"hidden"} textOverflow={"ellipsis"}>
        <TableCellText>{name}</TableCellText>
      </Td>
      <Td maxW="30rem" overflow={"hidden"} textOverflow={"ellipsis"}>
        <TableCellText>{description ? description : "..."}</TableCellText>
      </Td>
      <Td>
        <HStack>
          <ButtonSettings
            label="Customize"
            onClick={() => {
              console.log("im clineckadsk");
              setCurrentCountdown(countdown);
            }}
          />
          <EditModal countdown={countdown} />
          <DeleteModal countdown={countdown} />
        </HStack>
      </Td>
      <Td>
        <TableCellText fontSize={"xs"}>{createdAt}</TableCellText>
      </Td>
      <Td>
        <TableCellText fontSize={"xs"}>{updatedAt}</TableCellText>
      </Td>
    </Tr>
  );
}