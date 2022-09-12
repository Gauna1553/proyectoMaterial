import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1Component } from './componentes/componente1/componente1.component';
import { Componente2Component } from './componentes/componente2/componente2.component';
import { Componente3Component } from './componentes/componente3/componente3.component';
import { Componente4Component } from './componentes/componente4/componente4.component';

const routes: Routes = [
  {path:"comp1",component:Componente1Component},
  {path:"comp2",component:Componente2Component},
  {path:"comp3",component:Componente3Component},
  {path:"comp4",component:Componente4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
