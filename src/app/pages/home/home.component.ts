import { Component } from '@angular/core';
// import { ArchitectureInfo, Service } from './app.service';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  architecturesInfo = [{
    year: 1397,
    smp: 263,
    mmp: 208,
    cnstl: 9,
    cluster: 1,
  }, {
    year: 1398,
    smp: 169,
    mmp: 270,
    cnstl: 61,
    cluster: 7,
  }, {
    year: 1399,
    smp: 57,
    mmp: 261,
    cnstl: 157,
    cluster: 45,
  }, {
    year: 1400,
    smp: 0,
    mmp: 154,
    cnstl: 121,
    cluster: 211,
  }, {
    year: 1401,
    smp: 0,
    mmp: 97,
    cnstl: 39,
    cluster: 382,
  }, {
    year: 1402,
    smp: 0,
    mmp: 83,
    cnstl: 3,
    cluster: 437,
  }];

  constructor() {}
}

