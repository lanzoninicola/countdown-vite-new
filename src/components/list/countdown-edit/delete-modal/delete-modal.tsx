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
import { FiTrash2 } from "react-icons/fi";
import ButtonDelete from "../../../layout/button-delete/button-delete";
import Teext from "../../../layout/teext/teext";
import { Countdown } from "../../types";

interface ButtonDeleteProps {
  countdown: Countdown;
}

export default function DeleteModal({ countdown }: ButtonDeleteProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function deleteCountdown(ctd: any) {}

  return (
    <>
      <ButtonDelete label="Delete" onClick={onOpen} />

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="90%">
          <ModalHeader>Você realmente deseja excluir a tarefa?</ModalHeader>
          <ModalBody>
            <Teext>{countdown.description}</Teext>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Não
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => deleteCountdown(countdown)}
            >
              Sim
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
