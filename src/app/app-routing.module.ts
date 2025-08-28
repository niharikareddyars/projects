import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotebookComponent } from './notebook/notebook.component';

const routes: Routes = [
  { path: 'notebook/:page', component: NotebookComponent },
  { path: '**', redirectTo: 'notebook/page1' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
