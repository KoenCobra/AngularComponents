import {Component, Input, OnInit} from '@angular/core';

export interface itemList {
  image: string,
  title: string,
  description: string,
}

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  @Input() itemList: itemList[] = [];
  constructor() {
  }
  ngOnInit(): void {
  }
}
