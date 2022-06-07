import { Component, OnInit } from '@angular/core';
import { LogService } from '../shared/log.service';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {

  constructor(private myLog: LogService) {
    this.myLog.log("costruttore del component my");
   }

  ngOnInit() {
  }

  log(msg: string) {
    this.myLog.log(msg);
  }

}