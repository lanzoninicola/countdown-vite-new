import { Countdown } from "../../countdown-widget/types";
import { COUNTDOWNS_REST_API_ENDPOINTS } from "../constants/endpoints";
import { APIResponse } from "../types";

const update = async (countdown: Countdown): Promise<APIResponse> => {
  const { endpoint, method } = COUNTDOWNS_REST_API_ENDPOINTS.update;

  return await (
    await fetch(endpoint(countdown.id), {
      method: method,
      body: JSON.stringify(countdown),
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).json();
};

export default update;
