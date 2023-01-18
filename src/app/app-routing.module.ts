
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiltroComponent } from '@components/component/filtro/filtro.component';

const routes: Routes = [
  {path: 'filtro', component: FiltroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
