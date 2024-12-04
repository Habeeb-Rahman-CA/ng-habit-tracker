import { Component, Input } from '@angular/core';
import { IHabit } from '../../model/habit';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-habit-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './habit-item.component.html',
  styleUrl: './habit-item.component.css'
})
export class HabitItemComponent {

  @Input() habit!: IHabit

}
