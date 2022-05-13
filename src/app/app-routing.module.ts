import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ControlPanelComponent } from './control-panel/control-panel.component';
import { AccountComponent } from './account/account.component';
import { ServicesComponent } from './services/services.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { SolutionComponent } from './solution/solution.component';
import { PricingComponent } from './pricing/pricing.component';
import { SupportComponent } from './support/support.component';
import { DocsComponent } from './docs/docs.component';
import { UnknownComponent } from './unknown/unknown.component';
import { FaqComponent } from './faq/faq.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'solution', component: SolutionComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'support', component: SupportComponent },
  { path: 'docs', component: DocsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'control-panel', component: ControlPanelComponent, canActivate: [AuthGuard], 
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'account', component: AccountComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '**',   redirectTo: '/control-panel/dashboard', pathMatch: 'full' }
    ]
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: UnknownComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
