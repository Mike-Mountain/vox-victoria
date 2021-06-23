import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './core/components/landing/landing.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: '', pathMatch: 'full', redirectTo: 'landing' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
