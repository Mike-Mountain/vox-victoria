import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../../environments/environment';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AppRoutingModule } from '../app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { BottomNavigationComponent } from './components/bottom-navigation/bottom-navigation.component';
import { MatIconModule } from '@angular/material/icon';
import { LandingComponent } from './components/landing/landing.component';
import { SearchModule } from '../search/search.module';
import { QuotesModule } from '../quotes/quotes.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LayoutComponent,
    TopNavigationComponent,
    BottomNavigationComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    MatIconModule,
    SearchModule,
    QuotesModule
  ],
  exports: [
    // Modules:
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    environment.production ? [] : AkitaNgDevtools,

    // Components
    LayoutComponent,
    LandingComponent
  ]
})
export class CoreModule {
}
