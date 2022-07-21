import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { WorkerComponent } from './worker/worker.component'
import { WorkerService } from './worker/worker.service';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    AboutComponent,
    WorkerComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    TranslateModule
  ],
  providers: [WorkerService]
})
export class AboutModule { }
