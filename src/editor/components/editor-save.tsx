import { useState } from "react";
import { useTranslation } from "react-i18next";
import useCountdownSelector from "../../countdown-widget-provider/hooks/useCountdownSelector";
import useThemeSelector from "../../countdown-widget-theme-provider/hooks/useThemeSelector";
import { Countdown } from "../../countdown-widget/types";
import { create, update } from "../../editor-rest-api";
import useNotifications from "../../hooks/useNotification";
import ButtonSave from "../layout/button-save/button-save";

interface EditorSaveProps {
  currentCountdown: Countdown["id"] | null;
}

export default function EditorSave({ currentCountdown }: EditorSaveProps) {
  const { targetDate, targetTimezone } = useCountdownSelector();
  const { timer, title } = useThemeSelector();
  const { t } = useTranslation();
  const { success, error } = useNotifications();
  const [isLoading, setIsLoading] = useState(false);

  const savePayload = {
    targetDate,
    targetTimezone,
    timer,
    title,
  };

  function onSave() {
    setIsLoading(true);
    if (currentCountdown) {
      update(currentCountdown, savePayload)
        .then((res) => {
          if (res.code === "error" || res.data.status >= 400) {
            error(t("global.error"), {
              title: t("global.errorTitle"),
            });
          }

          if (res.code === "success") {
            success(t("global.success"), {
              title: t("global.successTitle"),
            });
          }
          setIsLoading(false);
        })
        .catch(() => {
          error(t("global.error"), {
            title: t("global.errorTitle"),
          });
          setIsLoading(false);
        });
    }
  }

  return (
    <ButtonSave
      label={t("editor.saveSettings").capitalize()}
      colorScheme={"green"}
      onClick={onSave}
      isLoading={isLoading}
      loadingText={t("global.saving").capitalize()}
    />
  );
}
