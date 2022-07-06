import { atom } from "recoil";
import { ToastProps } from "src/components";

export const globalToast = atom<ToastProps>({
  key: "toast",
  default: {
    visible: false,
    template: undefined,
  },
});

export const globalUserPrivacyInfo = atom({
  key: "privacyInfo",
  default: {
    phone_number: "",
    tos_agree: false,
  },
});
