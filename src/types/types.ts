export interface Page<T> {
  page: number;
  totalPages: number;
  content: T[];
}

export enum StateEnum {
  BORRADOR = "borrador",
  ENVIADA = "enviada",
}

export enum RolEnum {
  USUARIO = "usuario",
  ADMIN = "admin",
  GESTOR = "gestor",
}

export enum SizeEnum {
  XS,
  S,
  M,
  L,
  XL,
}

export enum IconTypeEnum {
  PREVIOUS,
  NEXT,
  LOGOUT,
  CANCEL,
  CONFIRM,
  CLOSE,
  USER,
  LOGIN,
  DELETE,
  EDIT,
  ADD,
  CHECK,
  SEARCH,
  MAIL,
  ARROW_NEXT,
  ARROW_PREVIOUS,
  PHONE,
  DONWLOAD,
  UPLOAD,
  ALERT,
  MAP,
  PDF,
  MEETING,
  LOG,
  FILE,
  INCIDENCE,
  PROGRESS,
  IMPORTANT,
  REDO,
}

export enum ColorEnum {
  DANGER = "danger",
}

export interface SelectOption {
  label: string;
  value: string;
}

export interface ContextOption {
  type: IconTypeEnum;
  onClick: (ids: string[]) => void;
}

export interface ModalButton {
  type: IconTypeEnum;
  onClick: () => void;
  label?: JSX.Element | string;
}

export enum ModalType {
  S_MODAL,
  M_MODAL,
  L_MODAL,
}
