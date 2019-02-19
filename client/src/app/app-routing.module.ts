import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { FormaModule } from './forma/forma.module';
import { CreateComponent } from './forma/create/create.component';
import { EditComponent } from './forma/edit/edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ViewStudentComponent } from './view-student/view-student.component';

const tableRoutes: Routes = [
  { path: 'form/create', component: CreateComponent },
  { path: 'form/edit/:id', component: EditComponent }
]

const routes: Routes = [
  { path: 'view/:id', component: ViewStudentComponent},
  { path: '', component: TableComponent},
  { path: '', component: TableComponent, children: tableRoutes },
  { path: '**', component: NotFoundComponent}
];
export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
