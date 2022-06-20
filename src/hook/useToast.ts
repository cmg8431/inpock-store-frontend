/* eslint-disable no-promise-executor-return */
import { useRecoilState } from "recoil";
import { ToastProps } from "src/components";
import { globalToast } from "src/store";

export default function useToast() {
  const [toast, setToast] = useRecoilState(globalToast);
  const showToast = async ({ template }: ToastProps) => {
    if (toast.visible) {
      return;
    }
    setToast({ visible: true, template });
    await sleep(1200);
    hideToast({ visible: false, template });
  };

  const hideToast = async ({ template }: ToastProps) => {
    setToast({ visible: false, template });
    await sleep(200);
    setToast({ visible: false, template: undefined });
  };

  return { toast, setToast, showToast, hideToast };
}

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
