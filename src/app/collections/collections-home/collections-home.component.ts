import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.scss']
})
export class CollectionsHomeComponent {
  partOfLink = 'hi';
  data = [
    { name: 'James', age: 24, job: 'Designer', employed:true },
    { name: 'Jill', age: 26, job: 'Engineer', employed:true },
    { name: 'Elyse', age: 25, job: 'Engineer', employed:false }
  ];
  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'employed', label: 'Employed' }
  ];
}
