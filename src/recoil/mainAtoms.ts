import { atom } from "recoil";
import { ModalType } from "../types/types";

export const isLoading = atom<boolean>({
  key: "isLoading",
  default: false,
});

export interface ConfirmationModalProps {
  visible: boolean
  title?: string
  params?: ModalParams
}

export const confirmationModal = atom<ConfirmationModalProps>({
  key: "confirmationModal",
  default: { visible: false, title:''},
});

export interface ModalAtomProps {
  visible: boolean
  title?: string
  type?: ModalType
  params?: ModalParams
}
export interface ModalParams {
  body?: string
  elementId?: string
  onConfirm?: ()=>void
}

export const modalAtom = atom<ModalAtomProps>({
  key: "modalAtom",
  default: { visible: false, title:'', type: undefined},
});


// export interface FamiliarModalProps {
//   visible: boolean;
//   familiarId?: string | undefined;
// }
// export const familiarModal = atom<FamiliarModalProps>({
//   key: "familiarModal",
//   default: { visible: false },
// });
