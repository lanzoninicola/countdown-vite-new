import { HStack, Button, Text, Grid, Box, Flex } from "@chakra-ui/react";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { Languages } from "../../i18n/types";
import useCurrentCountdownSelector from "../app-provider/hooks/useCurrentCountdownSelector";
import ButtonClose from "../layout/button-close/button-close";

//TODO: detect language from Wordpress
const lngs: Languages = {
  en: { nativeName: "English" },
  pt: { nativeName: "Português" },
};

export default function Header() {
  const { t, i18n } = useTranslation();
  const { currentCountdown, setCurrentCountdown } =
    useCurrentCountdownSelector();

  const isEditorShown = currentCountdown !== null;

  return (
    <Grid
      gridTemplateColumns={"350px 1fr 350px"}
      paddingInline="1rem"
      alignItems={"center"}
      minH="50px"
    >
      <Box>
        <Text>Countydowny</Text>
      </Box>
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
      <Flex justifyContent={"flex-end"}>
        {isEditorShown && (
          <ButtonClose
            label={t("editor.close")}
            onClick={() => {
              setCurrentCountdown(null);
            }}
          />
        )}
      </Flex>
    </Grid>
  );
}
