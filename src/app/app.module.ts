import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// Services
import { AppService } from './shared/app.service';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SupportComponent } from './pages/support/support.component';
import { SuccessComponent } from './pages/success/success.component';
import { UnknownComponent } from './pages/unknown/unknown.component';

// Components
import { LayoutComponent } from './components/layout/layout.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// Widgets
import { CtaComponent } from './widgets/cta/cta.component';
import { SolutionCardComponent } from './widgets/solution-card/solution-card.component';
import { AboutUsComponent } from './widgets/about-us/about-us.component';
import { SolutionListComponent } from './widgets/solution-list/solution-list.component';

// Utilities
import { LazyLoadDirective } from './utils/lazyload.directive';
import { RelativeTimePipe } from './utils/relative-time.pipe';
import { PhoneFormatPipe } from './utils/format-phone.pipe';
import { IntroComponent } from './widgets/intro/intro.component';



@NgModule({
  declarations: [
    AppComponent,
    LazyLoadDirective,
    RelativeTimePipe,
    PhoneFormatPipe,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    SolutionsComponent,
    ContactComponent,
    SupportComponent,
    SuccessComponent,
    UnknownComponent,
    CtaComponent,
    SolutionCardComponent,
    AboutUsComponent,
    SolutionListComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
