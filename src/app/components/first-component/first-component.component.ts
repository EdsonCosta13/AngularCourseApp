import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name="manilson";
  age=19;
  job="Software Developer";
  company="Cinapse SA";
  techs=["laravel","bootstrap","css","html","learning angular"];
  
  car={
    name:'porshe',
    year:2019,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
