import { Countdown } from "../../countdown-widget/types";

const BASE_ENDPOINT_URL = "http://localhost/bb-melhor-envio/wp-json/";
const REST_API_VERSION = "wbg-countdown/v1/";

const REST_API_URL = `${BASE_ENDPOINT_URL}${REST_API_VERSION}`;

const COUNTDOWNS_REST_API_ENDPOINTS = {
  create: {
    method: "POST",
    endpoint: () => `${REST_API_URL}countdowns`,
  },
  update: {
    method: "PUT",
    endpoint: (id: Countdown["id"]) => `${REST_API_URL}countdowns/${id}`,
  },
  delete: {
    method: "DELETE",
    endpoint: (id: Countdown["id"]) => `${REST_API_URL}countdowns/${id}`,
  },
  findAll: {
    method: "GET",
    endpoint: () => `${REST_API_URL}countdowns`,
  },
  findById: {
    method: "GET",
    endpoint: (id: Countdown["id"]) => `${REST_API_URL}countdowns/${id}`,
  },
};

export { REST_API_URL, COUNTDOWNS_REST_API_ENDPOINTS };
