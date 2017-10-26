import { Component, OnInit } from '@angular/core';
import { HttpRequest, ParseSDK, ParseUser } from '../../shared/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

  newName: string = '';
  errorMessage: string;
  names: any[] = [];

  constructor(
    public HttpRequest: HttpRequest,
    public parse: ParseSDK
  ) {}

  ngOnInit() {
    console.log('---------');
    this.parse.init();
    this.parse.login('phongdo', '11111111').then((user:ParseUser)=>{
      console.log(user);
    }).catch((err: any)=>{
      console.log(err);
    })
  }

}
