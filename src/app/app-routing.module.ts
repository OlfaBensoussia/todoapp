import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './components/all/all.component';
import { DoneComponent } from './components/done/done.component';
import { InprogressComponent } from './components/inprogress/inprogress.component';
import { TodosComponent } from './components/todos/todos.component';


const routes: Routes = [
  { path: 'all', component: AllComponent },
  { path: 'done', component: DoneComponent },
  { path: 'inprogress', component: InprogressComponent },
  { path: 'todos', component: TodosComponent },
  { path: '',   redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
