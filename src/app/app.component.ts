import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HabitService } from './services/habit.service';
import { HabitListComponent } from "./components/habit-list/habit-list.component";
import { StatsComponent } from "./components/stats/stats.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HabitListComponent, StatsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


}
