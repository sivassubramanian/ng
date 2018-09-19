import { Component, OnInit } from '@angular/core';
import { Myhero } from '../myhero';
@Component({
  selector: 'app-myhero',
  templateUrl: './myhero.component.html',
  styleUrls: ['./myhero.component.css']
})
export class MyheroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 employeeList:Myhero[]= [
    {
      id:1,
      name:"yuva",
    },
    {
      id:2,
      name:"siva",
    },
    {
      id:3,
      name:"giri",
    },

    {
      id:4,
      name:"vj",
    } ]
  }
