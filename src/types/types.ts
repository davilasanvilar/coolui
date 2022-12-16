export interface Page<T> {
  page: number;
  totalPages: number;
  content: T[];
}

export enum State {
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

export enum ButtonType {
  SAVE,
  CANCEL,
  EDIT,
  DELETE,
  CONFIRM,
}

export enum ContextOptionEnum {
  EDIT,
  DELETE,
}

export interface ContextOption {
  type: ContextOptionEnum;
  onClick: (ids:string[]) => void;
}

export interface ModalButton {
  type: ButtonType;
  onClick: () => void;
}

export enum ModalType {
  CONFIRMATION,
}
