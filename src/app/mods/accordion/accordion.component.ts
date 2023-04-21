import {Component, Input} from '@angular/core';

export interface accordionItem {
  title: string,
  content: string
}

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  @Input() accordionItems: accordionItem[] = [];

  openedItemIndex = 0;

  toggleAccordion(index:number){
    if (this.openedItemIndex === index){
      this.openedItemIndex = -1;
    }else{
    this.openedItemIndex = index
    }
  }
}
