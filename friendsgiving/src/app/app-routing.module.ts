import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { RsvpPageComponent } from './rsvp-page/rsvp-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full'},
  { path: 'Home', component: MainPageComponent },
  { path: 'Details/:person', component: DetailPageComponent},
  { path: 'RSVP/:person', component: RsvpPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
