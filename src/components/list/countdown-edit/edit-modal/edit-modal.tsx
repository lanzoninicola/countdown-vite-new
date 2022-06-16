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

import ButtonEdit from "../../../layout/button-edit/button-edit";
import { Countdown } from "../../types";
import EditForm from "./edit-form/edit-form";
import "../../../../style/global.css";

interface EditModalProps {
  countdown: Countdown;
}

export default function EditModal({ countdown }: EditModalProps) {
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
          <ModalHeader className="theme-font">Edit</ModalHeader>
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
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}