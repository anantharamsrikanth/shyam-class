import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() parentvalue:string;
@Output() childvalue = new EventEmitter<string>();
  constructor(private route:ActivatedRoute) { 
    console.log(this.route.snapshot.params);
  }
  senddata(value){
    console.log(value);
    this.childvalue.emit(value);
  }

  ngOnInit() {
  }

}
