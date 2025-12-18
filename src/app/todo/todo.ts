import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoItemComponent } from '../todo-item/todo-item';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoItemComponent],
  templateUrl: './todo.html',
})
export class TodoComponent {
  newTodoText = '';

  todos = [
    { text: 'Learn Angular', completed: false },
    { text: 'Use Tailwind', completed: true },
  ];

  addTodo() {
    if (!this.newTodoText.trim()) return;

    this.todos.push({
      text: this.newTodoText,
      completed: false,
    });

    this.newTodoText = '';
  }

  toggleTodo(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }
}
