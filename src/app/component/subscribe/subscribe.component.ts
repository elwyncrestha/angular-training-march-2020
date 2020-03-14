import {Component, OnInit} from '@angular/core';
import {Shop} from '../../model/shop';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  submitted = false;
  emailAddress = '';

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(value) {
    console.log(value);
    this.submitted = true;
  }
}
