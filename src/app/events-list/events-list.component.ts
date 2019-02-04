import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  event={
    id:1,
    name:'Angular Connect',
    date:'9/26/2022',
    time:'10:00am',
    price:599.89,
    location:{
      address:'City in US',
      city:'San Jose'
    }

  }

  constructor() { }

  ngOnInit() {
  }

}
