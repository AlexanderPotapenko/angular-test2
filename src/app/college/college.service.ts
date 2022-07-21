import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { CollgeModel } from './college.model';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {
  colleges: CollgeModel[]=[{id:0,name:'',about:''}]
  constructor() { }
  GetObservable$ = of(this.colleges)
}
