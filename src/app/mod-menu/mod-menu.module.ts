import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModMenuComponent } from './mod-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ModMenuComponent
  ],
  exports: [
    ModMenuComponent
  ]
})
export class ModMenuModule { }
