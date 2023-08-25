import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { QueryModule } from './modules/query/query.module';
import { AboutComponent } from './pages/about/about.component';
import { HomeModelsSectionComponent } from './pages/home/components/home-models-section/home-models-section.component';
import { HomeSliderSectionComponent } from './pages/home/components/home-slider-section/home-slider-section.component';
import { HomeComponent } from './pages/home/home.component';
import { MessageModalComponent } from './components/message-modal/message-modal.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    HomeSliderSectionComponent,
    HomeModelsSectionComponent,
    MessageModalComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    QueryModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/fipe-query/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
