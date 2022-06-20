import { LoginFormValues } from "src/pages";
import { API_SUFFIX, instance } from ".";

export interface UserProfileResponse {
  username: string;
  name: string;
  id: number;
  birth_date: string;
}

export const login = async ({
  username,
  password,
}: LoginFormValues): Promise<{ accessToken: string; refreshToken: string; user: UserProfileResponse }> => {
  const { data } = await instance.post(API_SUFFIX.LOGIN, { username, password });
  return data;
};

export const getUser = async (): Promise<UserProfileResponse> => {
  const { data } = await instance.get(API_SUFFIX.DETAIL);
  return data;
};
