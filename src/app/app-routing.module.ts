import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'studentslist',
    children: [
      {
        path: '',
        loadChildren:
          './studentslist/studentslist.module#StudentslistPageModule'
      },
      {
        path: ':studentid',
        loadChildren: './student/student.module#StudentPageModule'
      }
    ]
  },  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
