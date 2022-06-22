import { Countdown } from "../../countdown-widget/types";
import { EDITOR_REST_API_ENDPOINTS } from "../constants/endpoints";
import { APIResponse, EditorSettingsPayload } from "../types";

/**
 * Creates a new editor settings record for the given countdown id.
 * @param id - Countdown ID
 * @param editorSettings - Editor settings
 * @returns APIResponse
 *
 * Response codes:
 * - "success": The record was successfully created.
 * - "error": An error occurred.
 * - "warning": The record already exists.
 *
 * No payload is returned.
 *
 */
const create = async (
  id: Countdown["id"],
  settings: EditorSettingsPayload
): Promise<APIResponse> => {
  const { endpoint, method } = EDITOR_REST_API_ENDPOINTS.create;

  return await (
    await fetch(endpoint(id), {
      method: method,
      body: JSON.stringify(settings),
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).json();
};

export default create;
