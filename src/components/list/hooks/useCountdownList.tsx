import useSWR from "swr";
import { Countdown } from "../types";

interface UseCountdownListSWR {
  countdowns: Countdown[] | undefined;
  isLoading: boolean;
  isError: boolean;
}

//TODO: useSWR update url
export default function useCountdownList(): UseCountdownListSWR {
  const fetcher = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  let { data, error } = useSWR<Countdown[] | undefined>(
    "http://localhost/bb-melhor-envio/wp-json/wbg-countdown/v1/countdowns",
    fetcher
  );

  console.log(error);

  return {
    countdowns: data,
    isLoading: !error && !data,
    isError: error,
  };
}
