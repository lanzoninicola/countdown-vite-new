import ButtonSettings from "../../../layout/button-settings/button-settings";

interface CustomizeModalProps {
  countdownId: string;
}

export default function CustomizeModal({ countdownId }: CustomizeModalProps) {
  function onOpen() {
    console.log("onOpen");
  }

  return <ButtonSettings label="Customize" />;
}
