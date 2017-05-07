
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModBarPrincipalComponent } from './mod-bar-principal.component';
import { CompMenuComponent } from './comp-menu/comp-menu.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ModBarPrincipalComponent,
    CompMenuComponent
  ],
  exports: [
    ModBarPrincipalComponent
  ]
})
export class ModBarPrincipalModule { }