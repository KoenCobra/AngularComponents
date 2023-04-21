import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() data: { name: string; age: number; job: string; employed: boolean }[] = [];
  @Input() headers: { key: string; label: string }[] = [];
  @Input() classNames = '';
}
