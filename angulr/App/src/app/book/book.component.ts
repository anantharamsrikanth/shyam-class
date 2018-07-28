import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private route:ActivatedRoute) { 
    this.route.params.subscribe( params=>{console.log(params)});
    // this.route.params.subscribe( params => console.log(params));
  }

  ngOnInit() {
  }

}
