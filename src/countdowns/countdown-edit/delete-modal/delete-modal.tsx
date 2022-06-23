import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import { CountdownModel } from "../../../countdown-widget/types";
import ButtonDelete from "../../countdowns-table/primitives/button-delete/button-delete";
import Teext from "../../../components/layout/teext/teext";

interface ButtonDeleteProps {
  countdown: CountdownModel;
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
          <ModalHeader color={"red.500"}>
            {t("countdown_edit_delete.header")}
          </ModalHeader>
          <ModalBody>
            <Teext>{t("countdown_edit_delete.body")}</Teext>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} size={"sm"} onClick={onClose}>
              {t("global.no").capitalize()}
            </Button>
            <Button
              colorScheme="red"
              size={"sm"}
              onClick={() => deleteCountdown(countdown)}
            >
              {t("global.yes").capitalize()}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
