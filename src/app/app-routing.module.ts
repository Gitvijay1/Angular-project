import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';


const routes: Routes = [
{path : 'all' , component : StudentListComponent},
{path : 'create' , component : StudentCreateComponent},
{path: 'edit/:id' ,component: StudentEditComponent},
{path : '', redirectTo : 'all', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
