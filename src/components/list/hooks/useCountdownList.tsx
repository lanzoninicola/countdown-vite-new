import useSWR from "swr";
import useCountdownRestApi from "../../../services/rest-api/hooks/useCountdownRestApi";
import { APIResponse } from "../../../services/rest-api/types";
import { Countdown } from "../../editor/countdown/types";

interface UseCountdownListSWR {
  countdowns: Countdown[] | undefined;
  isLoading: boolean;
  isError: boolean;
}

//TODO: useSWR update url
export default function useCountdownList(): UseCountdownListSWR {
  const { apiBaseUrl, findAll } = useCountdownRestApi();

  let { data: response, error } = useSWR<APIResponse<Countdown[]>>(
    apiBaseUrl,
    findAll
  );

  return {
    countdowns: response?.data.payload!,
    isLoading: !error && !response,
    isError: error,
  };
}
