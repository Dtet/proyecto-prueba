import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "@/environments/environment";

// move to separated file
interface IFilterRequestBodyObjects {
    [key: string]: string | number
  }
interface IFilterRequest {
  [key: string]: string | IFilterRequestBodyObjects;
}

@Injectable({
  providedIn: 'root',
})
export class FacultativoServiceService {
  private baseUrl = environment.baseUrl;
  private facultativoUrl = `${this.baseUrl}/COMPAS`;

  private facultativoBody: IFilterRequest = {
    trigger: 'listarContratosFacultativo',
    consulta: {
      tpCodigo: '5',
      tpConsulta: '1',
      codigo: '',
      tpFecha: '1',
      feDesde: '02/07/2020',
      feHasta: '02/08/2022',
      usuario: 'edumont',
    },
    facultativo: {
      cdDomicilio: 0,
      cdCedente: 0,
      cdCorredor: 0,
      grupoRamo: 0,
      cdRamo: 0,
      cdIndole: 0,
      cdMoneda: 0,
      cdTpFacultativo: 0,
      cdTpNegocio: 0,
      cdEstado: '',
      usrRegistro: '',
      cedente: '',
      corredor: '',
      indole: 'IMPORTADORA DE VEHICULOS',
    },
    certificado: {
      cdAsegurado: 0,
      asegurado: '',
    },
  };

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getData(filter?: IFilterRequest): Observable<any> {
    const options = {
      ...this.httpOptions,
      body: filter ?? this.facultativoBody,
    };
    return this.http.get(this.facultativoUrl, options);
  }
}
