import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CoreModule,
    LandingRoutingModule,
    CoreModule
  ],
  providers: [],
})
export class LandingModule { }
