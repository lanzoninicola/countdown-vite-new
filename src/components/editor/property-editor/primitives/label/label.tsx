import { FormLabel, FormLabelProps } from "@chakra-ui/react";

export default function Label({
  size = "xs",
  children,
  ...props
}: FormLabelProps) {
  return (
    <FormLabel
      className="theme-font"
      fontSize={size}
      color="#666666"
      pl="15px"
      fontWeight={500}
      m={0}
      {...props}
    >
      {children}
    </FormLabel>
  );
}
