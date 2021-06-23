import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../../environments/environment';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AppRoutingModule } from '../app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { BottomNavigationComponent } from './components/bottom-navigation/bottom-navigation.component';


@NgModule({
  declarations: [
    LayoutComponent,
    TopNavigationComponent,
    BottomNavigationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    environment.production ? [] : AkitaNgDevtools.forRoot()
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    environment.production ? [] : AkitaNgDevtools,
    LayoutComponent
  ]
})
export class CoreModule {
}
