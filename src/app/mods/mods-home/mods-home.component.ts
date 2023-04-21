import {Component} from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.scss']
})
export class ModsHomeComponent {
  modalOpen = false;

  toggleModal(){
    this.modalOpen = !this.modalOpen;
  }
}
