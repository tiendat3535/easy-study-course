import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpIntercaptorComponent } from './http-intercaptor/http-intercaptor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HttpIntercaptorComponent],
  exports: [HttpIntercaptorComponent]
})
export class EscCommonModule { }
