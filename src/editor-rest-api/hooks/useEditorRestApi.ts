import { Countdown } from "../../countdown-widget/types";
import { EditorSettings } from "../../types";

import { EDITOR_REST_API_ENDPOINTS } from "../constants/endpoints";
import { APIResponse } from "../types";

export default function useEditorRestApi() {
  /**
   * Returns the editor settings for the given countdown id.
   *
   * @param id - Countdown ID
   * @returns APIResponse<EditorSettings | string>
   *
   * Response codes:
   * - "success": The record was found.
   * - "error": An error occurred.
   * - "warning": No records exists for the given id.
   *
   * If a record in the database is not found, the API will return the message "No rows were affected" otherwise it will return the record.
   */
  const findById = async (
    id: string
  ): Promise<APIResponse<EditorSettings | string>> => {
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
  const create = async (id: Countdown["id"]): Promise<APIResponse> => {
    const { endpoint, method } = EDITOR_REST_API_ENDPOINTS.create;

    return await (
      await fetch(endpoint(id), {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();
  };

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
    settings: EditorSettings
  ): Promise<APIResponse> => {
    const { endpoint, method } = EDITOR_REST_API_ENDPOINTS.update;

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

  /**
   * Removes the editor settings record for the given countdown id.
   * @param id - Countdown ID
   * @returns APIResponse
   *
   * Response codes:
   * - "success" if the record was removed
   * - "error" if the record was not removed
   * - "warning" if the record was not found
   *
   * No payload is returned.
   */
  const remove = async (id: Countdown["id"]): Promise<APIResponse> => {
    const { endpoint, method } = EDITOR_REST_API_ENDPOINTS.delete;
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
    create,
    update,
    remove,
  };
}
