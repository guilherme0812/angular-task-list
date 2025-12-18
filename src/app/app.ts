import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, TodoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mySuperTasks');
}
