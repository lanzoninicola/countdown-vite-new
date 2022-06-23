import {
  Badge,
  Box,
  Flex,
  FlexProps,
  forwardRef,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import { Tokens } from "../../../../countdown-widget-theme-provider/types/responsive";
import useCustomScrollbar from "../../../../hooks/useCustomScrollbar";
import DEFAULT_BREAKPOINTS from "../../constants/default-breakpoints";
import DisplaySizeBar from "./display-size-bar/display-size-bar";

interface PreviewWrapperProps extends FlexProps {
  children: React.ReactNode;
  currentToken: Tokens;
}

const PreviewWrapper = forwardRef(
  ({ currentToken, children, ...props }: PreviewWrapperProps, ref) => {
    const scrollbar = useCustomScrollbar();

    return (
      <VStack ref={ref} id="countdown-wrapper" spacing={4}>
        <DisplaySizeBar currentToken={currentToken} />
        <Flex
          justifyContent={"center"}
          border={"1px solid black"}
          borderColor="gray.300"
          borderStyle={"dotted"}
          w={DEFAULT_BREAKPOINTS[currentToken]}
          overflowX={"auto"}
          css={scrollbar}
          {...props}
        >
          {children}
        </Flex>
      </VStack>
    );
  }
);

export default PreviewWrapper;
