import { Component,OnInit } from '@angular/core';
import{ FormControl } from '@angular/forms';  
import { css } from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'JustToDo';
  item:string="";
  items:any[]=[];
  i:number=0;
  changeText:boolean=true;
  funcEdit:boolean=true

constructor(){}
ngOnInit(){}

added_item()
  {
    this.items.push(this.item);
    alert(this.items);
  }
  remove_item(i)
  {
    alert(i);
   this.items.splice(i,1)
  }
    edit_item(i)
    {
      alert(i);
    }
  }