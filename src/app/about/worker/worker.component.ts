import {Component, Inject, Input, OnInit} from '@angular/core';
import {WorkerModel} from './worker.model';


@Component({
    selector: 'app-worker',
    templateUrl: './worker.component.html',
    styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {
    @Input() worker: WorkerModel | any;

    constructor() { }

    ngOnInit() {}

}
