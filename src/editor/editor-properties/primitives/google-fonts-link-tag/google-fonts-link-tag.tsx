import { useGoogleFontsUtils } from "../../../../countdown-widget-typography";
import { Typography } from "../../../../countdown-widget-typography";

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
