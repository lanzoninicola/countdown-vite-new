import { Countdown } from "../../countdown-widget/types";
import { EDITOR_REST_API_ENDPOINTS } from "../../editor-rest-api/constants/endpoints";

import { APIResponse } from "../types";

export default function useEditorSettingsRestApi() {
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
    const { endpoint, method } = EDITOR_REST_API_ENDPOINTS.findById;

    return await (
      await fetch(endpoint(id), {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();
  };

  return {
    findById,
  };
}
