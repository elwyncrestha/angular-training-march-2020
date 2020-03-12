import {Component, Input, OnInit} from '@angular/core';
import {Shop} from '../../../model/shop';

@Component({
  selector: 'app-about-detail',
  templateUrl: './about-detail.component.html',
  styleUrls: ['./about-detail.component.css']
})
export class AboutDetailComponent implements OnInit {
  @Input() selectedShop: Shop;

  constructor() { }

  ngOnInit() {
  }

}
