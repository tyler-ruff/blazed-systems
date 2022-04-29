import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ControlPanelComponent } from './control-panel/control-panel.component';
import { HomeComponent } from './home/home.component';
import { SolutionComponent } from './solution/solution.component';
import { PricingComponent } from './pricing/pricing.component';
import { UnknownComponent } from './unknown/unknown.component';

import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  { path: 'solution', component: SolutionComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'control-panel', component: ControlPanelComponent, canActivate: [AuthGuard] },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: UnknownComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
