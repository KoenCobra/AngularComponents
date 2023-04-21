import {Component, Input} from '@angular/core';

export interface statistics {
  value: number;
  label: string;
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  @Input() data: statistics[] = [];
}
