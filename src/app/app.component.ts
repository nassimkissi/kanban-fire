import { Component } from '@angular/core';
import { Task } from './task/task'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todo: Task[] = [
    {
      title: 'Buy milk', 
      description: 'Go to the store and buy milk'
    },
    {
      title: 'Create a Kanban appp',
      description: 'Go to the store and buy milk'
    }
  ]
}
