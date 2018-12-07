import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './sistema/inicio/inicio.component';
import { SistemaComponent } from './sistema/sistema.component';
import { GuiaComponent } from './sistema/guia/guia.component';
import { IdentidadComponent } from './sistema/guia/identidad/identidad.component';





const routes: Routes = [
  { path: 'sistema', component: SistemaComponent,
    children: [
      { path: 'inicio', component: InicioComponent},
      { path: 'guia', component: GuiaComponent,
       children: [
        { path: 'identidad', component: IdentidadComponent}

       ]
      },

  ]
  },
  { path: '**', redirectTo: '/sistema/inicio', pathMatch: 'full' }

];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
