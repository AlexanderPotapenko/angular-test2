import {Component, OnInit} from '@angular/core'
import {WorkerModel} from './worker/worker.model'
import { Observable } from 'rxjs'
import { WorkerService } from './worker/worker.service'
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  translate:TranslateService
  workers?:WorkerModel[]  
  workerService:WorkerService
  ngOnInit() {
      this.workerService.GetObservable$().subscribe(workers => {
        this.workers = workers
      })
  }
  constructor(workerService_:WorkerService, translate:TranslateService) {
    this.workerService = workerService_
    this.translate = translate
  }
}

  