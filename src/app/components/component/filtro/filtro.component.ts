import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { registros } from '@models/filtro.model';
import { FilterServiceService } from '@services/filter-service.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})

export class FiltroComponent implements OnInit {
  
  filtro = new FormGroup({
    facultativos: new FormControl(''),
    feRegistro: new FormControl(''),
    feDesde: new FormControl(''),
    feHasta: new FormControl(''),
    asegurado: new FormControl(''),
    cedente: new FormControl(''),
    corredor: new FormControl(''),
    domicilio: new FormControl(''),
    moneda: new FormControl(''),
    gpRamo: new FormControl(''),
    ramo: new FormControl(''),
    contrato: new FormControl(''),
    negocio: new FormControl(''),
    indole: new FormControl(''),
    stFacultativo: new FormControl(''),
    usrRegistro: new FormControl(''),
    nrFacultativo: new FormControl(''),
    nrEspecificoFacultativo: new FormControl('')
  });

 options!: registros[];
 private subs = new Subscription();
 filteredOption!: Observable<any[]>;

 
  constructor(private filterService: FilterServiceService) {
  }

  ngOnInit(): void {

    this.subs.add(this.filterService.getInfo().subscribe( data => {
      this.options = data;
  }));


}
  
}
