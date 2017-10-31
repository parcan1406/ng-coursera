import { Component, OnInit } from '@angular/core';
import {Dish} from "../shared/dish";
import {Promotion} from "../shared/promotion";
import {DishService} from "../services/dish.service";
import {PromotionService} from "../services/promotion.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DishService, PromotionService]
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;

  constructor(private dishservice: DishService,
              private promotionservice: PromotionService) { }

  ngOnInit() {
    this.dish = this.dishservice.getFeaturedDish();
    this.promotion = this.promotionservice.getFeaturedPromotion();
  }

}