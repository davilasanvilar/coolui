export interface Page<T> {
  page: number;
  totalPages: number;
  content: T[];
}

export enum SizeEnum {
  XS,
  S,
  M,
  L,
  XL,
}

export interface SelectOption {
  label: string;
  value: string;
}
