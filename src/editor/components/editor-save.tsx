import { useState } from "react";
import { useTranslation } from "react-i18next";

import useSettingsContext from "../../countdown-provider/hooks/settings/useSettingsContext";
import useTheme from "../../countdown-provider/hooks/theme/useTheme";
import {
  CountdownModel,
  CountdownSettingsAndTheme,
} from "../../countdown-widget/types";
import { update } from "../../countdown-rest-api/services/editor";
import useNotifications from "../../hooks/useNotification";
import ButtonSave from "../layout/button-save/button-save";

interface EditorSaveProps {
  currentCountdown: CountdownModel["id"] | null;
}

export default function EditorSave({ currentCountdown }: EditorSaveProps) {
  const { targetDate, targetTimezone } = useSettingsContext();
  const { timer, title } = useTheme();
  const { t } = useTranslation();
  const { success, error } = useNotifications();
  const [isLoading, setIsLoading] = useState(false);

  const savePayload: CountdownSettingsAndTheme = {
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
        })
        .catch(() => {
          error(t("global.error"), {
            title: t("global.errorTitle"),
          });
        })
        .finally(() => {
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
