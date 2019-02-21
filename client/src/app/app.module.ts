import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { TableComponent } from './table/table.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { CreateComponent } from './create/create.component';
// import { EditStudentComponent } from './edit-student/edit-student.component';
import { FormaModule } from './forma/forma.module';
import { PipesModule } from './pipes/pipes.module';
import { DirectivesModule} from './directives/directives.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { HttpClientModule} from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    NotFoundComponent,
    ViewStudentComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormaModule,
    PipesModule,
    DirectivesModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
