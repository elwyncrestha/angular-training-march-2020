import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ShopService} from '../../service/shop.service';
import {Shop} from '../../model/shop';
import {Router} from '@angular/router';

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

  constructor(
    private formBuilder: FormBuilder,
    private shopService: ShopService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.shopForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      location: [''],
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
