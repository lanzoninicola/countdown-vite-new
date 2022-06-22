import { Box, Button, Flex, Grid, HStack, Text } from "@chakra-ui/react";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

import useCountdownSelector from "../../countdown-widget-provider/hooks/useCountdownSelector";
import useCurrentCountdownSelector from "../../countdown-widget-provider/hooks/useCurrentCountdownSelector";
import EditorSave from "../../editor/components/editor-save";
import ButtonClose from "../../editor/layout/button-close/button-close";
import ButtonSave from "../../editor/layout/button-save/button-save";
import { Languages } from "../../i18n/types";

//TODO: detect language from Wordpress
const lngs: Languages = {
  en: { nativeName: "English" },
  pt: { nativeName: "Português" },
};

export default function Header() {
  const { t, i18n } = useTranslation();
  const { currentCountdown, resetState: resetCurrentCountdown } =
    useCurrentCountdownSelector();
  const { resetState: resetCountdownSettings } = useCountdownSelector();

  const isEditorShown = currentCountdown !== null;

  return (
    <Grid
      gridTemplateColumns={"300px 1fr 300px"}
      paddingInline="1rem"
      alignItems={"center"}
      minH="50px"
    >
      <Box>
        <Text>Clockdown</Text>
      </Box>
      <Box>
        <HStack justifyContent={"space-between"}>
          <Box>
            {Object.keys(lngs).map((lng) => (
              <Button
                key={lng}
                style={{
                  fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
                }}
                onClick={() => i18n.changeLanguage(lng)}
              >
                {lngs[lng].nativeName}
              </Button>
            ))}
          </Box>
          {isEditorShown && <EditorSave currentCountdown={currentCountdown} />}
        </HStack>
      </Box>
      <Flex justifyContent={"flex-end"}>
        {isEditorShown && (
          <ButtonClose
            label={t("editor.close")}
            onClick={() => {
              resetCountdownSettings();
              resetCurrentCountdown();
            }}
          />
        )}
      </Flex>
    </Grid>
  );
}
