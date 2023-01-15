/* export interface IFacultativo {
  cdDomicilio: number;
  cdCedente: number;
  cdCorredor: number;
  grupoRamo: number;
  cdRamo: number;
  cdIndole: number;
  cdMoneda: number;
  cdTpFacultativo: number;
  cdTpNegocio: number;
  cdEstado: number;
  usrRegistro: string;
  cedente: string;
  corredor: string;
  indole: string;
} */

export interface IFacultativo {
  [key: string]: number | string;
}
export interface IFacultativoList {
  [key: string]: number[] | string[];
}
export interface IFacultativoApiResponse {
  result: {
    data: {
      listado: IFacultativoList;
    };
  };
}

/* export interface IFacultativoList {
  cdDomicilio: number[];
  cdCedente: number[];
  cdCorredor: number[];
  grupoRamo: number[];
  cdRamo: number[];
  cdIndole: number[];
  cdMoneda: number[];
  cdTpFacultativo: number[];
  cdTpNegocio: number[];
  cdEstado: number[];
  usrRegistro: string[];
  cedente: string[];
  corredor: string[];
  indole: string[];
} */
