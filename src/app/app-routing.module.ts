import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { 
    path: 'college', 
    loadChildren: () => import('./college/college.module').then(m => m.CollegeModule) 
  },
  { 
    path: 'about', 
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule) 
  }, 
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
