import axios from "axios";

export const API_BASE_URL = "http://localhost:8000";

export const API_SUFFIX = {
  LOGIN: "/login",
  DETAIL: "/detail",
};

export const instance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export interface APIResponse<T = unknown> {
  response: T;
}

export const setAccessToken = (token: string | null) => {
  if (token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common.Authorization;
  }
};
