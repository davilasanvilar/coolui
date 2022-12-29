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

export enum ButtonTypeEnum {
  SAVE,
  CANCEL,
  EDIT,
  DELETE,
  CONFIRM,
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
    EDIT
}

export enum ColorEnum {
  DANGER='danger'
}

export interface SelectOption {
  label:string
  value:string
}


export interface ContextOption {
  type: IconTypeEnum;
  onClick: (ids:string[]) => void;
}

export interface ModalButton {
  type: IconTypeEnum;
  onClick: () => void;
}

export enum ModalType {
  CONFIRMATION,
}
