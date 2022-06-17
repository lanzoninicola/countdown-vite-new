import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

import TableHeaderText from "./layout/table-header-text/table-header-text";
import { Countdown } from "../../../types";
import TableRow from "./layout/table-row/table-row";

interface CountdownsTableProps {
  countdowns: Countdown[] | undefined;
}

export default function CountdownsTable({ countdowns }: CountdownsTableProps) {
  const columnsTitle = [
    "Name",
    "Description",
    "Actions",
    "Created at",
    "Updated at",
  ];

  return (
    <TableContainer bg="white">
      <Table variant="simple">
        <Thead>
          <TableHeaders titles={columnsTitle} />
        </Thead>
        <Tbody>
          {countdowns?.map((countdown) => (
            <TableRow key={countdown.id} countdown={countdown} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

function TableHeaders({ titles }: { titles: string[] }) {
  return (
    <Tr>
      {titles.map((title, idx) => (
        <Th key={idx}>
          <TableHeaderText>{title}</TableHeaderText>
        </Th>
      ))}
    </Tr>
  );
}
