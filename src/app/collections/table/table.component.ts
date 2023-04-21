import {Component, Input} from '@angular/core';

export interface table {
  name: string,
  age: number,
  job: string,
  employed: boolean
}

export interface headers {
  key: string,
  label: string
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() data: table[] = [];
  @Input() headers: headers[] = [];
  @Input() classNames = '';
}
