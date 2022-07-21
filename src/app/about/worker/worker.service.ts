import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WORKERS } from './mock-workers';
import { WorkerModel } from './worker.model';


@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  private workers = WORKERS
  constructor() { }
  
  AddWorker(worker:WorkerModel){
    this.workers.push(worker)
  }
  GetData(){
    return this.workers
  }

  GetObservable$():Observable<WorkerModel[]>{
      return of(this.workers)
  } 

}