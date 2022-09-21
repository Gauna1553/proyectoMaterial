import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  nombre: string;
  codigo: number;
  descripcion: string;
  precio: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {codigo: 1, nombre: 'Armado de PCs', descripcion: "Usted selecciona los componentes que desea para su PC", precio: 60000},
  {codigo: 2, nombre: 'Venta de Componentes', descripcion: "Diversos componentes de diversas marcas", precio: 25000},
  {codigo: 3, nombre: 'Venta de Perifericos', descripcion: "Multiples marcas muy buenas", precio :7500},
  {codigo: 4, nombre: 'Instalacion de Sistema Operativo', descripcion: "Le descargamos el sistema operativo que usted quiera", precio: 11000},
  {codigo: 5, nombre: 'Arreglo de PCs', descripcion: "Arreglamos cualquier problema que tenga", precio: 12500},
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
  displayedColumns: string[] = ['codigo', 'nombre', 'descripcion', 'precio'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
