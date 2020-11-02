import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { GuardService } from './core/Guard/authGuard.service';


const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  {
    path: 'landing',
    loadChildren: () => import('./modules/landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'cPanal',
    loadChildren: () => import('./modules/cPanal/cPanal.module').then((m) => m.CpanalModule),
    canActivate: [GuardService],
  },
  { path: '**', redirectTo: 'landing' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
