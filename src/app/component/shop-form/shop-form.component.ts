import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ShopService} from '../../service/shop.service';
import {Shop} from '../../model/shop';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-shop-form',
  templateUrl: './shop-form.component.html',
  styleUrls: ['./shop-form.component.css']
})
export class ShopFormComponent implements OnInit {

  shopForm: FormGroup;
  responseFlag = {
    success: false,
    failure: false
  };
  shop: Shop = new Shop();

  constructor(
    private formBuilder: FormBuilder,
    private shopService: ShopService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.buildForm();
    this.activatedRoute.queryParamMap.subscribe((value) => {
      const shopId = Number(value.get('shopId'));
      if (shopId && shopId > 0) {
        this.shopService.getById(shopId).subscribe((response: any) => {
          this.shop = response;
          this.buildForm();
        }, error => {
          console.error(error);
        });
      }
    });
  }

  private buildForm(): void {
    this.shopForm = this.formBuilder.group({
      id: [this.shop.id],
      name: [this.shop.name, Validators.required],
      description: [this.shop.description],
      location: [this.shop.location],
      openingDate: [this.shop.openingDate]
    });
  }

  submit() {
    const model = this.shopForm.value as Shop;
    this.shopService.save(model).subscribe(() => {
      this.responseFlag.failure = false;
      this.responseFlag.success = true;
      this.router.navigate(['/about']);
    }, error => {
      console.error(error);
      this.responseFlag.failure = true;
      this.responseFlag.success = false;
    });
  }
}
