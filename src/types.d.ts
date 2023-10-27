declare global {
  interface Array<T> {
    toSorted(compareFn?: (a: T, b: T) => number): T[];
  }
}

export enum SortBy {
  NONE = "none",
  ASOCIADO = "asociado",
  CMA = "cma",
  CUOTA = "cuota",
  SALDO = "saldo",
}

export type Asociado = {
  email: string;
  nombreCompleto: string;
  cma: "Vencido" | "Al día";
  cuota: "Paga" | "Impaga";
  saldo: number;
};

export type Aeronaves = { modelo: string; patente: string; alerta: Alerta };

export type Alerta = "ok" | "peligro" | "advertencia";
