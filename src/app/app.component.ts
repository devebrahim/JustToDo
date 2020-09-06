import { Component,OnInit, ApplicationRef, assertPlatform } from '@angular/core';
import{ FormControl } from '@angular/forms';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'JustToDo';
  ToDo =new FormControl('');
constructor(){}
ngOnInit(){
  }
}
