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
  moneda: 'Moneda',
};

@Component({
  selector: 'app-tabla-facultativo',
  templateUrl: './tabla-facultativo.component.html',
  styleUrls: ['./tabla-facultativo.component.css'],
})
export class TablaFacultativoComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<IFacultativo>([]);
  columns = Object.entries(headerNames).map(([key, header]) => {
    return {
      columnDef: key,
      header,
      cell: (element: IFacultativo) => `${element[key]}`,
    };
  });

  displayedColumns = this.columns.map((c) => c.columnDef);
  pageSizeOptions: number[] = [5, 10, 15];

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private facultativoServicio: FacultativoServiceService) {}

  // first component load
  ngOnInit(): void {
    // get data from DB
    this.facultativoServicio.getData().subscribe(
      (response: any) => {
        // catch errors in response
        if (!response?.result?.data?.listado) {
          throw Error('Something went wrong');
        }

        // format response
        const { formattedData, keys } = facultativoListAdapter(
          response.result.data?.listado
        );

        // assign formatted response to table data
        this.dataSource.data = formattedData;

        // format table columns
        this.columns = keys.map((key) => ({
          columnDef: key,
          header: headerNames[key],
          cell: (element: IFacultativo) => `${element[key]}`,
        }));

        // displayed columns by id (key) idfk
        this.displayedColumns = this.columns.map((c) => c.columnDef);
      },
      // catch errors from request
      (err: Error) => {
        console.log(err);
      }
    );
  }
}
