import { Component, inject } from '@angular/core';
import { HabitService } from '../../services/habit.service';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent  {

  habitService = inject(HabitService)

  streak = this.habitService.getHabits().filter(habit => habit.completed).length

}
