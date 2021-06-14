import { useCallback, useContext, useEffect } from "react";
import { Context } from "./ModalContext";
import { Handler } from "./types";

const useModal = (modal: React.ReactNode, closeOnOverlayClick = true): [Handler, Handler] => {
  return modalHelper(modal, closeOnOverlayClick);
};

const modalHelper = (modal: React.ReactNode, closeOnOverlayClick = true): [Handler, Handler] => {
  const { onPresent, onDismiss, setCloseOnOverlayClick } = useContext(Context);
  const onPresentCallback = useCallback(() => {
    onPresent(modal);
  }, [modal, onPresent]);

  useEffect(() => {
    setCloseOnOverlayClick(closeOnOverlayClick);
  }, [closeOnOverlayClick, setCloseOnOverlayClick]);

  return [onPresentCallback, onDismiss];
}

export const ModalWrapper = (modal: React.ReactNode, closeOnOverlayClick = true): [Handler, Handler] => {
  return modalHelper(modal, closeOnOverlayClick);
};

export default useModal;
