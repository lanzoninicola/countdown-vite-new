import {
  useDisclosure,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FiTrash2 } from "react-icons/fi";
import ButtonDelete from "../../../layout/button-delete/button-delete";
import Teext from "../../../layout/teext/teext";
import { Countdown } from "../../types";

interface ButtonDeleteProps {
  countdown: Countdown;
}

export default function DeleteModal({ countdown }: ButtonDeleteProps) {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  function deleteCountdown(ctd: any) {}

  return (
    <>
      <ButtonDelete label="Delete" onClick={onOpen} />

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="90%">
          <ModalHeader color={"red.500"}>Are you absolutely sure?</ModalHeader>
          <ModalBody>
            <Teext>
              This action{" "}
              <Teext as="span" fontWeight={600}>
                cannot
              </Teext>{" "}
              be undone. This will permanently delete the{" "}
              <Teext as="span">"{countdown.name}"</Teext> countdown.
            </Teext>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} size={"sm"} onClick={onClose}>
              {t("global.no")}
            </Button>
            <Button
              colorScheme="red"
              size={"sm"}
              onClick={() => deleteCountdown(countdown)}
            >
              {t("global.Yes")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
