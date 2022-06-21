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
import { useRef, useState } from "react";
import NewForm from "./new-form/new-form";
import { useTranslation } from "react-i18next";

import useNotifications from "../../../hooks/useNotification";

import { Countdown } from "../../../countdown-widget/types";
import useCurrentCountdownSelector from "../../../countdown-widget-provider/hooks/useCurrentCountdownSelector";
import { useCountdownsRestApi } from "../../../countdowns-rest-api";
import { APIResponse } from "../../../countdowns-rest-api/types";

export default function NewModal() {
  const [name, setName] = useState<Countdown["name"]>("");
  const [description, setDescription] = useState<Countdown["description"]>("");
  const [isSuspense, setIsSuspense] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { t } = useTranslation();

  const initialRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const { create } = useCountdownsRestApi();
  const { successWithButton: successNotification, error: errorNotification } =
    useNotifications();

  const { setCurrentCountdown } = useCurrentCountdownSelector();

  function createCountdown() {
    setIsSuspense(true);
    create({ name, description } as Countdown)
      .then((response) => {
        successResponseFromServer(response);
      })
      .catch(() => {
        setIsSuspense(false);
        errorNotification(t("global.error"), {
          title: t("global.errorTitle"),
        });
      });
  }

  function successResponseFromServer(response: APIResponse<Countdown["id"]>) {
    setIsSuspense(false);
    onClose();
    successNotification(t("countdown_edit_new.createSuccess"), {
      title: t("countdown_edit_new.createSuccessTitle"),
      buttonProps: {
        children: t("countdown_edit_new.editCountdown"),
        onClick: () => setCurrentCountdown(response.data.payload!),
      },
    });
  }

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
            <NewForm
              initialFocusRef={initialRef}
              onNameChange={setName}
              onDescriptionChange={setDescription}
              isSuspense={isSuspense}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              isLoading={isSuspense}
              loadingText={t("global.saving").capitalize()}
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
