import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { UnknownComponent } from './unknown/unknown.component';
import { LoadingComponent } from './loading/loading.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { LazyLoadDirective } from './lazyload.directive';
import { LoginComponent } from './login/login.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { HomeComponent } from './home/home.component';
import { SolutionComponent } from './solution/solution.component';
import { PricingComponent } from './pricing/pricing.component';
import { SupportComponent } from './support/support.component';
import { DocsComponent } from './docs/docs.component';
import { FaqComponent } from './faq/faq.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LazyLoadDirective,
    UnknownComponent,
    LoadingComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ControlPanelComponent,
    HomeComponent,
    SolutionComponent,
    PricingComponent,
    SupportComponent,
    DocsComponent,
    FaqComponent,
    DashboardComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AuthModule.forRoot({
      domain: 'blazed.us.auth0.com',
      clientId: 'saszF4v0Q8RVn3mejA6WX7h1m5R7HCKQ'
    }),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
