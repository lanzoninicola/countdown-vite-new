import { forwardRef, HeadingProps } from "@chakra-ui/react";
import Heeading from "../../../../layout/heeading/heeading";

const TableHeaderText = forwardRef(
  ({ children, ...props }: HeadingProps, ref) => {
    return (
      <Heeading ref={ref} fontSize={"xs"} {...props}>
        {children}
      </Heeading>
    );
  }
);

export default TableHeaderText;
