import { useMutation, UseMutationResult, useQuery, UseQueryResult } from "react-query";
import { useNavigate } from "react-router-dom";
import { APIErrorResponse, APIResponse, APIResponseStatusType, setAccessToken } from "src/api";
import { getUser, login, LoginFormValues, UserProfileResponse } from "src/api/user";
import useToast from "../useToast";

export const useLogin = (): UseMutationResult<
  APIResponse<{ access_token: string; refresh_token: string }>,
  APIErrorResponse,
  LoginFormValues
> => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  return useMutation("useLogin", login, {
    onSuccess: (data: {
      status: APIResponseStatusType;
      message: string;
      result: { access_token: string; refresh_token: string; user: UserProfileResponse };
    }) => {
      localStorage.setItem("accessToken", data.result.access_token);
      localStorage.setItem("refreshToken", data.result.refresh_token);
      setAccessToken(data.result.access_token);
      navigate("/mypage");
    },
    onError: (data) => {
      showToast({ visible: true, template: data.message });
    },
    retry: 0,
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

export const useFetchUser = (): UseQueryResult<APIResponse<UserProfileResponse>, APIErrorResponse> => {
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
      staleTime: 3600,
    },
  );
};
