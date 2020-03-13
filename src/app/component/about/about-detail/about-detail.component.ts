import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Shop} from '../../../model/shop';

@Component({
  selector: 'app-about-detail',
  templateUrl: './about-detail.component.html',
  styleUrls: ['./about-detail.component.css']
})
export class AboutDetailComponent implements OnInit {
  @Input() selectedShop: Shop;
  @Output() hideEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() viewEmitter: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  public hide(): void {
    this.hideEmitter.emit(true);
  }

  public view(): void {
    this.viewEmitter.emit(this.selectedShop.id);
  }
}
