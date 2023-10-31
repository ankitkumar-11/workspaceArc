import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComComponent } from './TestCom/TestCom.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'feat1'
  },
  {
    path:'feat1',
    loadChildren:()=>import("projects/feature1/src/lib/feature1.module").then(m=>m.Feature1Module)
  }

  //  {
  //   path:'feat1',
  //   component:TestComComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
