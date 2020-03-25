import {Component, OnInit} from '@angular/core';
import {Shop} from '../../model/shop';
import {ShopService} from '../../service/shop.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  shops: Array<Shop> = new Array<Shop>();
  selectedShop: Shop;
  viewingShop: Shop;
  error: string;

  constructor(private shopService: ShopService) {
  }

  ngOnInit() {
    this.fetchData();
  }

  public viewDetail(shopIndex: number): void {
    this.selectedShop = this.shops[shopIndex];
  }

  respondHide($event: boolean) {
    if ($event) {
      this.selectedShop = null;
    }
  }

  respondView($event: Shop) {
    this.viewingShop = $event;
  }

  public deleteShop(id: number) {
    this.shopService.delete(id).subscribe(() => {
      this.fetchData();
    }, error => {
      console.error(error);
      alert('Failed to delete');
    });
  }

  private fetchData(): void {
    this.shopService.getAll().subscribe((response: any) => {
      this.shops = response;
    }, error => {
      console.error(error);
      this.error = 'Could not load shops';
    });

  }
}
