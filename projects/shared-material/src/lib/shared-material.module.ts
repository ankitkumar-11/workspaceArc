import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

const MaterialComponet =  [
  MatButtonModule,
  MatTableModule,
]

@NgModule({
  declarations: [],
  imports: [MaterialComponet],
  exports: [MaterialComponet]
})
export class SharedMaterialModule { }
