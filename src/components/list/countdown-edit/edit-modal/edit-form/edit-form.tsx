import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { Countdown } from "../../../types";
import "../../../../../style/global.css";

interface EditFormProps {
  initialFocusRef?: React.MutableRefObject<HTMLInputElement>;
  countdown: Countdown;
}

export default function EditForm({
  initialFocusRef,
  countdown,
}: EditFormProps) {
  function handleTask() {}

  return (
    <>
      <FormControl mb={3}>
        <FormLabel
          htmlFor="countdown-name"
          className="theme-font"
          fontSize={"sm"}
        >
          Name
        </FormLabel>
        <Input
          id="countdown-name"
          ref={initialFocusRef}
          placeholder="Add a name"
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
          Description
        </FormLabel>
        <Textarea
          id="countdown-desc"
          placeholder="Add a description"
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
