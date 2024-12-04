import { Component, inject } from '@angular/core';
import { HabitItemComponent } from "../habit-item/habit-item.component";
import { HabitService } from '../../services/habit.service';
import { IHabit } from '../../model/habit';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-habit-list',
  standalone: true,
  imports: [HabitItemComponent, FormsModule],
  templateUrl: './habit-list.component.html',
  styleUrl: './habit-list.component.css'
})
export class HabitListComponent {

  habitService = inject(HabitService)
  newHabitName: string = ''

  habits: IHabit[] = this.habitService.getHabits()

  addHabit(){
    if (this.newHabitName) {
      const newHabit: IHabit = {name: this.newHabitName, completed: false}
      this.habitService.addHabit(newHabit)
      this.newHabitName = ''
    }
  }
}
