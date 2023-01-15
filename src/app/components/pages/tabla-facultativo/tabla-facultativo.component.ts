import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IFacultativo } from '@models/facultativo.model';
import { FacultativoServiceService } from '@services/facultativo-service.service';
import facultativoListAdapter from 'src/app/utils/orden';

const headerNames: { [key: string]: string } = {
  cdCedente: 'Código de Cedente',
  cdCorredor: 'Código de Corredor',
  grupoRamo: 'Grupo Ramo',
  cdRamo: 'Código de Ramo',
  cdIndole: 'Código de Indole',
  cdMoneda: 'Código de Moneda',
  cdTpFacultativo: 'Código tipo de Facultativo',
  cdTpNegocio: 'Código tipo de Negocio',
  cdEstado: 'Código de Estado',
  usrRegistro: 'Usuario',
  cedente: 'Cedente',
  corredor: 'Corredor',
  indole: 'Indole',
  poliza: 'Poliza',
  moneda: 'Moneda'
};

@Component({
  selector: 'app-tabla-facultativo',
  templateUrl: './tabla-facultativo.component.html',
  styleUrls: ['./tabla-facultativo.component.css'],
})
export class TablaFacultativoComponent implements OnInit, AfterViewInit {
  columns = Object.entries(headerNames).map(([key, header]) => {
    return {
      columnDef: key,
      header,
      cell: (element: IFacultativo) => `${element[key]}`,
    };
  });

  dataSource = new MatTableDataSource<IFacultativo>([]);
  displayedColumns = this.columns.map((c) => c.columnDef);

  pageSizeOptions: number[] = [ 5, 10, 15 ]
 
  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  constructor(private facultativoServicio: FacultativoServiceService) {}

  ngOnInit(): void {
    this.facultativoServicio.getData().subscribe(
      (resp) => {
        const { formattedData, keys } = facultativoListAdapter(
          resp.result.data.listado
        );
        this.dataSource.data = formattedData;
        this.columns = keys.map((key) => ({
          columnDef: key,
          header: headerNames[key],
          cell: (element: IFacultativo) => `${element[key]}`,
        }));
        this.displayedColumns = this.columns.map((c) => c.columnDef);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
