import { NgModule } from '@angular/core';
import { Feature1Component } from './feature1.component';
import { Feature1RoutingModule } from './feature1-routing.module';
import { SharedMaterialModule } from 'projects/shared-material/src/public-api';



@NgModule({
  declarations: [Feature1Component],
  imports: [
    Feature1RoutingModule,
    SharedMaterialModule
  ],
  exports: [Feature1Component]
})
export class Feature1Module { }
