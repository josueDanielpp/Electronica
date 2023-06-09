import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FijaComponent } from './fija/fija.component';
import { EmisorComponent } from './emisor/emisor.component';
import { DivisorComponent } from './divisor/divisor.component';
import { RealimentacionComponent } from './realimentacion/realimentacion.component';
const routes: Routes = [
  { path: 'polarizacion-fija', component: FijaComponent },
  { path: 'polarizacion-emisor', component: EmisorComponent },
  { path: 'polarizacion-Divisor', component: DivisorComponent },
  { path: 'polarizacion-Realimentacion', component: RealimentacionComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'polarizacion-fija' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
