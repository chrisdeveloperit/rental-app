import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { QueryFormComponent } from './query-form/query-form.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { RentalService } from './services/rental.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    QueryFormComponent,
    RentalListComponent,
    RentalDetailComponent

  ],
  providers: [ RentalService],
   bootstrap: [AppComponent] 
})
export class AppModule { }