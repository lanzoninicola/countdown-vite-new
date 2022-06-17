import "../../../../style/global.css";

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import NewForm from "./new-form/new-form";
import { useTranslation } from "react-i18next";

export default function NewModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();
  const initialRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  function createCountdown() {}

  return (
    <>
      <Button size="sm" onClick={onOpen}>
        {t("countdown_edit_new.buttonLabel")}
      </Button>
      <Modal
        isCentered
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent w="90%">
          <ModalHeader className="theme-font">
            {t("countdown_edit_new.header")}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <NewForm initialFocusRef={initialRef} />
          </ModalBody>

          <ModalFooter>
            <Button
              className="theme-font"
              colorScheme="blue"
              size={"sm"}
              onClick={() => createCountdown()}
            >
              {t("global.save").capitalize()}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
