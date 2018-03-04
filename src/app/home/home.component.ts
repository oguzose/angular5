import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _data: DataService) { }

  btnTextDeneme: string = 'Deneme';
  itemCount: number;
  btnText: string = 'Add An Item';
  goalText: string = 'My Goal is';


  goals = [];


  ngOnInit() {
    this._data.goal.subscribe(res =>this.goals = res );
    this.itemCount = this.goals.length; 
    this._data.changeGoal(this.goals);
  }

  addItem(){
    this.goals.push(this.goalText);
    this.goalText = ''; 
    this.itemCount = this.goals.length; 
    this._data.changeGoal(this.goals);
  }

  removeItem(i){
    this.goals.splice(i,1);
    this._data.changeGoal(this.goals);
  }

}
