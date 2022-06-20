import { Countdown } from "../../../components/editor/countdown/types";
import API_ENDPOINTS from "../constants/api-endpoints";
import { APIResponse } from "../types";

export default function useCountdownRestApi() {
  const apiBaseUrl = `${API_ENDPOINTS.baseEndpointURL}${API_ENDPOINTS.apiVersion}`;
  const countdownEndpoints = API_ENDPOINTS.countdown;

  /**
   * Returns the editor settings for the given countdown id.
   *
   * @param id - Countdown ID
   * @returns APIResponse<Countdown[]>
   *
   * Response codes:
   * - "success": The record was found.
   * - "error": An error occurred.
   * - "warning": No records exists for the given id.
   *
   * If a record in the database is not found, the API will return an empty array.
   */
  const findAll = async (): Promise<APIResponse<Countdown[]>> => {
    const { endpoint, method } = countdownEndpoints.findAll;

    return await (
      await fetch(endpoint(), {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();
  };

  /**
   * Returns the editor settings for the given countdown id.
   *
   * @param id - Countdown ID
   * @returns APIResponse<Countdown[]>
   *
   * Response codes:
   * - "success": The record was found.
   * - "error": An error occurred.
   * - "warning": No records exists for the given id.
   *
   * If a record in the database is not found, the API will not return a payload.
   */
  const findById = async (id: string): Promise<APIResponse<Countdown>> => {
    const { endpoint, method } = countdownEndpoints.findById;

    return await (
      await fetch(endpoint(id), {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();
  };

  const create = async (
    countdown: Omit<Countdown, "id">
  ): Promise<APIResponse<Countdown["id"]>> => {
    const { endpoint, method } = countdownEndpoints.create;

    return await (
      await fetch(endpoint(), {
        method: method,
        body: JSON.stringify(countdown),
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();
  };

  const update = async (countdown: Countdown): Promise<APIResponse> => {
    const { endpoint, method } = countdownEndpoints.update;

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

  const remove = async (countdown: Countdown): Promise<APIResponse> => {
    const { endpoint, method } = countdownEndpoints.delete;
    return await (
      await fetch(endpoint(countdown.id), {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();
  };

  return {
    apiBaseUrl,
    findAll,
    findById,
    create,
    update,
    remove,
  };
}
