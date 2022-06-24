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

import ButtonEdit from "../../countdowns-table/primitives/button-edit/button-edit";

import EditForm from "./edit-form/edit-form";
import { CountdownModel } from "../../../countdown-widget/types";
import { useTranslation } from "react-i18next";

interface EditModalProps {
  countdown: CountdownModel;
}

export default function EditModal({ countdown }: EditModalProps) {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  function upTask() {}

  return (
    <>
      <ButtonEdit label="Edit" onClick={onOpen} />
      <Modal
        isCentered
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent w="90%">
          <ModalHeader className="theme-font">
            {t("countdown_edit_edit.header")}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <EditForm initialFocusRef={initialRef} countdown={countdown} />
          </ModalBody>

          <ModalFooter>
            <Button
              className="theme-font"
              colorScheme="blue"
              size={"sm"}
              onClick={() => upTask()}
            >
              {t("countdown_edit_edit.buttonLabel")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
