import {Component} from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.scss']
})
export class ModsHomeComponent {
  modalOpen = false;
  accordionItems = [
    {title: 'why is the sky blue', content: 'answer'},
    {title: 'Question 2', content: 'answer 2'},
    {title: 'Question 3', content: 'answer 3'}
  ]

  toggleModal() {
    this.modalOpen = !this.modalOpen;
  }
}
