import { useMutation, UseMutationResult, useQuery, UseQueryResult } from "react-query";
import { useNavigate } from "react-router-dom";
import { APIResponse, setAccessToken } from "src/api";
import { getUser, login, UserProfileResponse } from "src/api/user";
import { LoginFormValues } from "src/pages";
import useToast from "../useToast";

export interface NonFieldError {
  data: {
    non_field_errors: string[];
  };
}

export const useLogin = (): UseMutationResult<{ accessToken: string }, APIResponse<NonFieldError>, LoginFormValues> => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  return useMutation("useLogin", login, {
    onSuccess: (data: { accessToken: string; refreshToken: string; user: any }) => {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      localStorage.setItem("expiredTime", data.user);
      setAccessToken(data.accessToken);
      navigate("/mypage");
    },
    onError: (data) => {
      showToast({ visible: true, template: data?.response.data.non_field_errors[0] });
    },
  });
};

// export const useLogout = (): UseMutationResult<{ lastConnectedAt: string }, APIResponse, void> => {
//   const navigate = useNavigate();

//   return useMutation(
//     "useLogout",
//     () => {
//       const token = localStorage.getItem("token");
//       if (token) setAccessToken(token);
//       return logout();
//     },
//     {
//       onSuccess: () => {
//         setAccessToken(null);
//         localStorage.removeItem("token");
//       },
//     },
//   );
// };

export const useFetchUser = (): UseQueryResult<UserProfileResponse, APIResponse> => {
  return useQuery(
    "useFetchUser",
    () => {
      const token = localStorage.getItem("accessToken");
      if (token) setAccessToken(token);
      return getUser();
    },
    {
      onError: () => {
        localStorage.removeItem("token");
        setAccessToken(null);
      },
      retry: 0,
    },
  );
};
