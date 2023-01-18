import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class FilterServiceService {

  private facultativoUrl = '/COMPAS/';
  private facultativoBody = {
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

  constructor(private http: HttpClient, private fb: FormBuilder) { }


  getInfo(): Observable<any> {
    return this.http.get(this.facultativoUrl)
    .pipe(
      map((response: any) => response
      .map((data: any) => data['Serie'])))

  }
}
