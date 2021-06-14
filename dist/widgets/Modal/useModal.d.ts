import { Handler } from "./types";
declare const useModal: (modal: React.ReactNode, closeOnOverlayClick?: boolean) => [Handler, Handler];
export declare const ModalWrapper: (modal: React.ReactNode, closeOnOverlayClick?: boolean) => [Handler, Handler];
export default useModal;
