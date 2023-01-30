import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { CanActivateGuard } from './can-activate.guard';
import { FormComponent } from './components/form/form.component';
import { VistaComponent } from './components/vista/vista.component';

const routes: Routes = [
  {path: 'form', component: FormComponent},
  {path: '', component: FormComponent},
  {path: 'vista', component: VistaComponent, canActivate:[CanActivateGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
