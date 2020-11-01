import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { CpanalRoutingModule } from './cPanal-routing.module';
import { CpanalComponent } from './cPanal.component';

@NgModule({
  declarations: [
    CpanalComponent
  ],
  imports: [
    CommonModule,
    CpanalRoutingModule,
    CoreModule
  ],
  providers: [],
})
export class CpanalModule { }
