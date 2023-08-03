import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { SwitchesPageComponent } from './pages/switches-page/switches-page.component';
import { DinamycPageComponent } from './pages/dinamyc-page/dinamyc-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BasicPageComponent,
    SwitchesPageComponent,
    DinamycPageComponent,
  ],
  imports: [CommonModule, ReactiveRoutingModule, ReactiveFormsModule],
})
export class ReactiveModule {}
