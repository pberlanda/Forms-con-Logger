import { Component, OnInit } from '@angular/core';
import { LogService } from '../shared/log.service';

@Component({
  selector: 'app-log-test',
  templateUrl: './log-test.component.html',
  styleUrls: ['./log-test.component.css']
})
export class LogTestComponent implements OnInit {

  constructor(private myLog: LogService) {
    this.myLog.log("constructor del log-test component");
   }

  ngOnInit() {
  }

  testLog(msg: string): void {
    this.myLog.log("test del logger " + msg);
  }

}