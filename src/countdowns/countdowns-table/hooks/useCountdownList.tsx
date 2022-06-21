import useSWR from "swr";
import { Countdown } from "../../../countdown-widget/types";
import useCountdownRestApi from "../../../countdowns-rest-api/hooks/useCountdownsRestApi";

import { COUNTDOWNS_REST_API_ENDPOINTS } from "../../../countdowns-rest-api/constants/endpoints";
import { APIResponse } from "../../../countdowns-rest-api/types";

interface UseCountdownListSWR {
  countdowns: Countdown[] | undefined;
  isLoading: boolean;
  isError: boolean;
}

//TODO: useSWR update url
export default function useCountdownsList(): UseCountdownListSWR {
  const { findAll } = useCountdownRestApi();

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
