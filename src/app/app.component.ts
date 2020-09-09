import { Component,OnInit } from '@angular/core';
import{ FormControl } from '@angular/forms';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'JustToDo';
  item:string="";
  items:string[]=[];
  i:number=0;
  
constructor(){}
ngOnInit(){}
added_item()
  {
    this.items.push(this.item);
    alert(this.item);
    alert(this.i);
    this.i=this.i+1;
    alert(this.items)
  }
  //remove_item(){
    //alert(this.item);
    //delete this.items[this.i]}
}
