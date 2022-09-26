import { Component, OnInit,ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';


@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.css']
})
export class Componente4Component implements OnInit {
  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion;
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }
  openAll() {}
  closeAll () {}

}
