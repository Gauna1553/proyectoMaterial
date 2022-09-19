import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  nombre: string;
  codigo: number;
  descripcion: string;
  precio: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {codigo: 1, nombre: 'Hydrogen', descripcion: "", precio: 1},
  {codigo: 2, nombre: 'Helium', descripcion: "", precio: 1},
  {codigo: 3, nombre: 'Lithium', descripcion: "", precio :1},
  {codigo: 4, nombre: 'Beryllium', descripcion: "", precio:1 },
  {codigo: 5, nombre: 'Boron', descripcion: "", precio: 1},
  /*{position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'}, */
];


@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {
  displayedColumns: string[] = ['codigo', 'nombre', 'descipcion', 'precio'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
