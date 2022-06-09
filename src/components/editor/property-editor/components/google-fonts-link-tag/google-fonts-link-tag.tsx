import useGoogleFontsUtils from "../../../../../services/typography/hooks/useGoogleFontsUtils";
import { Typography } from "../../../../../services/typography/types";

/**
 * This renders the <link> tag for the Google Fonts API
 */
export default function GoogleFontsLinkTag({
  googleFonts,
}: {
  googleFonts: Typography[];
}) {
  const { getGoogleFontLinkTagHref } = useGoogleFontsUtils();

  return (
    <link rel="stylesheet" href={getGoogleFontLinkTagHref(googleFonts)}></link>
  );
}
