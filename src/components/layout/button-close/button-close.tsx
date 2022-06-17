import {
  forwardRef,
  IconButton,
  IconButtonProps,
  Tooltip,
} from "@chakra-ui/react";
import { FiX } from "react-icons/fi";

interface ButtonCloseProps extends Omit<IconButtonProps, "aria-label"> {
  label: string;
}

const ButtonClose = forwardRef(({ label, ...props }: ButtonCloseProps, ref) => {
  return (
    <Tooltip label={label}>
      <IconButton
        ref={ref}
        {...props}
        icon={<FiX />}
        isRound={true}
        size="sm"
        aria-label={label}
      />
    </Tooltip>
  );
});

export default ButtonClose;
