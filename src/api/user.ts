/* eslint-disable camelcase */
import { APIResponse, API_SUFFIX, instance, setAccessToken } from ".";

export interface LoginFormValues {
  username: string;
  password: string;
}

export interface SmsFormValues {
  phone_number?: string;
  auth_number?: string;
}

export interface UserProfileResponse {
  username: string;
  name: string;
  id: number;
  birth_date: string;
}

export type RegisterStep3Values = {
  username?: string;
  password?: string;
  name?: string;
  phone_number?: string;
  birth_date?: string;
  tos_agree?: boolean;
  passwordConfig?: string;
};

export const login = async ({
  username,
  password,
}: LoginFormValues): Promise<
  APIResponse<{ access_token: string; refresh_token: string; user: UserProfileResponse }>
> => {
  const { data } = await instance.post(API_SUFFIX.LOGIN, {
    username,
    password,
  });
  return data;
};

export const getUser = async (): Promise<UserProfileResponse> => {
  const { data } = await instance.get(API_SUFFIX.DETAIL);
  return data;
};

export const register = async ({
  username,
  password,
  phone_number,
  name,
  birth_date,
  tos_agree,
}: RegisterStep3Values) => {
  const { data } = await instance.post(API_SUFFIX.REGISTER, {
    username,
    password,
    phone_number,
    name,
    birth_date,
    tos_agree,
  });
  return data;
};

export const sms = async (phone_number: string) => {
  const { data } = await instance.post(API_SUFFIX.SMS, { phone_number });
  return data;
};

export const smsVerify = async ({ phone_number, auth_number }: SmsFormValues) => {
  const { data } = await instance.post(API_SUFFIX.SMS_VERIFY, { phone_number, auth_number });
  return data;
};

export const logout = async () => {
  const { data } = await instance.post(API_SUFFIX.LOGOUT);
  return data;
};

export const getRefreshTokenAuth = async (): Promise<APIResponse<{ access_token: string }>> => {
  const token = localStorage.getItem("refreshToken");
  if (token) setAccessToken(token);
  const { data } = await instance.post(API_SUFFIX.REFRESH, { refresh_token: token });
  return data;
};
