import { Countdown } from "../../countdown-widget/types";
import { COUNTDOWNS_REST_API_ENDPOINTS } from "../constants/endpoints";
import { APIResponse } from "../types";

const remove = async (countdown: Countdown): Promise<APIResponse> => {
  const { endpoint, method } = COUNTDOWNS_REST_API_ENDPOINTS.delete;
  return await (
    await fetch(endpoint(countdown.id), {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).json();
};

export default remove;
