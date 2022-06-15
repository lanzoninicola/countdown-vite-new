import { HStack, Td, Tr } from "@chakra-ui/react";
import dayjs from "dayjs";

import TableCellText from "../table-cell-text/table-cell-text";
import CustomizeModal from "../../../countdown-edit/cutomize-modal/customize-modal";
import DeleteModal from "../../../countdown-edit/delete-modal/delete-modal";
import EditModal from "../../../countdown-edit/edit-modal/edit-modal";
import { Countdown } from "../../../types";

interface TableRowProps {
  countdown: Countdown;
}

//TODO: how to present the Date in the right format?

export default function TableRow({ countdown }: TableRowProps) {
  const { id, name, description, created_at, updated_at } = countdown;

  const createdAt = dayjs(created_at).format("DD/MM/YYYY");
  const updatedAt = updated_at && dayjs(updated_at).format("DD/MM/YYYY");

  return (
    <Tr>
      <Td maxW="12rem" overflow={"hidden"} textOverflow={"ellipsis"}>
        <TableCellText>{name}</TableCellText>
      </Td>
      <Td maxW="30rem" overflow={"hidden"} textOverflow={"ellipsis"}>
        <TableCellText>{description ? description : "..."}</TableCellText>
      </Td>
      <Td>
        <HStack>
          <CustomizeModal countdownId={id} />
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
