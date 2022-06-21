import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Countdown } from "../../../../countdown-widget/types";

interface EditFormProps {
  initialFocusRef?: React.MutableRefObject<HTMLInputElement>;
  countdown: Countdown;
}

export default function EditForm({
  initialFocusRef,
  countdown,
}: EditFormProps) {
  const { t } = useTranslation();
  function handleTask() {}

  return (
    <>
      <FormControl mb={3}>
        <FormLabel
          htmlFor="countdown-name"
          className="theme-font"
          fontSize={"sm"}
        >
          {t("global.name")}
        </FormLabel>
        <Input
          id="countdown-name"
          ref={initialFocusRef}
          placeholder={t("countdown_edit_new.namePlaceholder")}
          defaultValue={countdown.name}
          onChange={handleTask}
          onFocus={handleTask}
          className="theme-font"
        />
      </FormControl>
      <FormControl>
        <FormLabel
          htmlFor="countdown-desc"
          className="theme-font"
          fontSize={"sm"}
        >
          {t("global.description")}
        </FormLabel>
        <Textarea
          id="countdown-desc"
          placeholder={t("countdown_edit_new.descriptionPlaceholder")}
          defaultValue={countdown.description}
          onChange={handleTask}
          onFocus={handleTask}
          minH={"120px"}
          className="theme-font"
        />
      </FormControl>
    </>
  );
}
