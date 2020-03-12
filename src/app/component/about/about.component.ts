import { Component, OnInit } from '@angular/core';
import {Shop} from '../../model/shop';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  shops: Array<Shop> = new Array<Shop>();
  selectedShop: Shop;

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 10; i ++) {
      const shop = new Shop();
      shop.id = i;
      shop.name = `Shop ${i + 1}`;
      shop.location = `Location ${i + 1}`;
      shop.description = 'This is shop. This is shop. This is shop. This is shop. This is shop. This is shop. This is shop. ';
      shop.openingDate = new Date();
      this.shops.push(shop);
    }
  }

  public viewDetail(shopId: number): void {
    this.selectedShop = this.shops[shopId];
  }
}
