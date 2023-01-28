import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { SuccessComponent } from './pages/success/success.component';
import { SupportComponent } from './pages/support/support.component';
import { UnknownComponent } from './pages/unknown/unknown.component';

import { PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'about', component: AboutComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'support', component: SupportComponent },
  { path: 'contact', component: ContactComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: UnknownComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
