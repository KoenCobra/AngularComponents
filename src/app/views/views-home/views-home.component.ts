import {Component} from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.scss']
})
export class ViewsHomeComponent {
  stats = [
    {value: 22, label: "# of users"},
    {value: 900, label: "Revenue"},
    {value: 50, label: "Reviews"},
  ]

  itemList = [
    {
      image: '/assets/couch.jpeg',
      title: 'Couch',
      description: 'This is a fantastic couch to sit on'
    },
    {
      image: '/assets/dresser.jpeg',
      title: 'Dresser',
      description: 'This is a great dresser to put stuff in'
    }
  ]
}
