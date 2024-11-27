import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueryFormComponent } from './query-form/query-form.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';

const routes: Routes = [
  { path: 'query-form', component: QueryFormComponent },
  { path: 'rental-list', component: RentalListComponent },
  { path: 'rental-detail', component: RentalDetailComponent },
  { path: '', redirectTo: '/query-form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }