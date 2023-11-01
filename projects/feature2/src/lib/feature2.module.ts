import { NgModule } from '@angular/core';
import { Feature2Component } from './feature2.component';
import { SharedMaterialModule } from 'projects/shared-material/src/public-api';



@NgModule({
  declarations: [Feature2Component],
  imports: [
    SharedMaterialModule
  ],
  exports: [Feature2Component]
})
export class Feature2Module { }
