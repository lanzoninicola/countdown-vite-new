import { useState } from "react";
import CountdownTimer from "./components/countdown-timer/countdown-timer";
import { CountdownTimerProvider } from "./context/countdow-timer-context";
import useEditorSettings from "./hooks/useEditorSettings";

// TODO: check if the isMockMode flag could be handled with npm scripts

interface CountdownProps {
  /** if true load the mock data of the editor settings, default false */
  isMockMode?: boolean;
  isEditorMode?: boolean;
}

export default function Countdown(
  { isMockMode, isEditorMode }: CountdownProps = {
    isMockMode: false,
    isEditorMode: false,
  }
) {
  const { editorSettings, isError, isLoading } = useEditorSettings({
    isMockMode,
    isEditorMode,
  });

  // TODO: Error component
  // TODO: Handling errors
  if (isError) {
    return <div>failed to load</div>;
  }

  // TODO: Loading component
  if (isLoading) {
    return <div>loading...</div>;
  }

  return <CountdownTimer />;
}
