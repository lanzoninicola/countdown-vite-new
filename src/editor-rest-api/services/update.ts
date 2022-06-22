import { Countdown } from "../../countdown-widget/types";
import { EDITOR_REST_API_ENDPOINTS } from "../constants/endpoints";
import { APIResponse, EditorSettingsPayload } from "../types";

/**
 * Updates the editor settings record for the given countdown id.
 * @param id - Countdown ID
 * @param editorSettings - Editor settings
 * @returns APIResponse
 *
 * Response codes:
 * - "warning" if the record was not found
 * - "success" if the record was updated
 * - "error" if the record was not updated
 *
 * No payload is returned.
 */
const update = async (
  id: Countdown["id"],
  settings: EditorSettingsPayload
): Promise<APIResponse> => {
  const { endpoint, method } = EDITOR_REST_API_ENDPOINTS.update;

  return await (
    await fetch(endpoint(id), {
      method: method,
      body: JSON.stringify({
        countdown_id: id,
        settings,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).json();
};

export default update;
