import useSWR from "swr";

import { COUNTDOWNS_REST_API_ENDPOINTS } from "../../../countdowns-rest-api/constants/endpoints";
import { APIResponse } from "../../../countdowns-rest-api/types";
import { Countdown } from "../../../countdown-widget/types";
import findAll from "../../../countdowns-rest-api/services/find-all";

interface UseCountdownListSWR {
  countdowns: Countdown[] | undefined;
  isLoading: boolean;
  isError: boolean;
}

//TODO: useSWR update url
export default function useCountdownsList(): UseCountdownListSWR {
  let { data: response, error } = useSWR<APIResponse<Countdown[]>>(
    COUNTDOWNS_REST_API_ENDPOINTS,
    findAll
  );

  return {
    countdowns: response?.data.payload!,
    isLoading: !error && !response,
    isError: error,
  };
}
