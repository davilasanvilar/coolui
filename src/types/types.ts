export interface Page<T> {
  pagina: number;
  paginasTotales: number;
  content: T[];
}

export enum Estado {
  BORRADOR = "borrador",
  ENVIADA = "enviada",
}

export enum RolEnum {
  USUARIO = "usuario",
  ADMIN = "admin",
  GESTOR = "gestor",
}

export enum SizeEnum {
  XS, S, M, L, XL
}

export enum ButtonType {
  SAVE, CANCEL, EDIT, DELETE, CONFIRM
}

export interface ModalButton {
  type: ButtonType
  onClick: ()=>void
}

export enum ModalType {
  CONFIRMATION
}
