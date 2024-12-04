import { Injectable } from '@angular/core';
import { IHabit } from '../model/habit';

@Injectable({
  providedIn: 'root'
})
export class HabitService {

  habits: IHabit[] = [
    { name: 'Exercise', completed: false },
    { name: 'Drink Water', completed: false },
    { name: 'Read a Book', completed: false }
  ]

  getHabits(){
    return this.habits
  }

  addHabit(habit: IHabit){
    this.habits.push(habit)
  }

}

