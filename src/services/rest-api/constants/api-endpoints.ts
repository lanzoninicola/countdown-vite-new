import { Countdown } from "../../../components/editor/countdown/types";

const baseEndpointURL = "http://localhost/bb-melhor-envio/wp-json/";
const apiVersion = "wbg-countdown/v1/";

const API_ENDPOINTS = {
  baseEndpointURL,
  apiVersion,
  countdown: {
    create: {
      method: "POST",
      endpoint: () => `${baseEndpointURL}${apiVersion}countdowns`,
    },
    update: {
      method: "PUT",
      endpoint: (id: Countdown["id"]) =>
        `${baseEndpointURL}${apiVersion}countdowns/${id}`,
    },
    delete: {
      method: "DELETE",
      endpoint: (id: Countdown["id"]) =>
        `${baseEndpointURL}${apiVersion}countdowns/${id}`,
    },
    findAll: {
      method: "GET",
      endpoint: () => `${baseEndpointURL}${apiVersion}countdowns`,
    },
    findById: {
      method: "GET",
      endpoint: (id: Countdown["id"]) =>
        `${baseEndpointURL}${apiVersion}countdowns/${id}`,
    },
  },
  editor: {
    findById: {
      method: "GET",
      endpoint: (id: Countdown["id"]) =>
        `${baseEndpointURL}${apiVersion}countdowns/${id}/countdown-settings`,
    },
    create: {
      method: "POST",
      endpoint: (id: Countdown["id"]) =>
        `${baseEndpointURL}${apiVersion}countdowns/${id}/countdown-settings`,
    },
    update: {
      method: "PUT",
      endpoint: (id: Countdown["id"]) =>
        `${baseEndpointURL}${apiVersion}countdowns/${id}/countdown-settings`,
    },
    delete: {
      method: "DELETE",
      endpoint: (id: Countdown["id"]) =>
        `${baseEndpointURL}${apiVersion}countdowns/${id}/countdown-settings`,
    },
  },
};

export default API_ENDPOINTS;
