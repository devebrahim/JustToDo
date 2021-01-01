import {Component, OnInit} from '@angular/core';

interface TodoInterface {
  title: string;
  isHovered: boolean;
  isEditing: boolean;
  isDone: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'JustToDo';
  newTodoTitle = '';
  todoList: TodoInterface[] = [];
  i: number = 0;
  funcEdit: boolean = true

  constructor() {
  }

  ngOnInit() {
  }

  onAddTodoClick() {
    const todo: TodoInterface = {
      title: this.newTodoTitle,
      isDone: false,
      isHovered: false,
      isEditing:false
    };
    this.todoList.push(todo);
    
  }

  onTodoRemoveClick(todoIndex: number) {
    this.todoList.splice(todoIndex, 1);
  }
}
