import { Countdown } from "../../countdown-widget/types";
import { COUNTDOWNS_REST_API_ENDPOINTS } from "../constants/endpoints";
import { APIResponse } from "../types";

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
  const { endpoint, method } = COUNTDOWNS_REST_API_ENDPOINTS.findAll;

  return await (
    await fetch(endpoint(), {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).json();
};

export default findAll;
