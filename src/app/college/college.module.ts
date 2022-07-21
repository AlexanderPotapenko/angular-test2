import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollegeRoutingModule } from './college-routing.module';
import { CollegeComponent } from './college.component';
import { CollegeService } from './college.service';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    CollegeComponent
  ],
  imports: [
    CommonModule,
    CollegeRoutingModule,
    TranslateModule
  ],
  providers:[CollegeService]
})
export class CollegeModule { }
