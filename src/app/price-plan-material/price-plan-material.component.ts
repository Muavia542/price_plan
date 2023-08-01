import { Component } from '@angular/core';

@Component({
  selector: 'app-price-plan-material',
  templateUrl: './price-plan-material.component.html',
  styleUrls: ['./price-plan-material.component.css']
})
export class PricePlanMaterialComponent {
sliderValue: number = 1;
servicePrice: number = 65; // Initial price

constructor() { }
ngOnInit(): void {
}

formatLabel(value: number): string {
  this.sliderValue = value;
  console.log(this.sliderValue);
  return `${value}`;
}

// calculatePrice() {
//   this.servicePrice = this.servicePrice + this.sliderValue * 25; 
//   return this.servicePrice;
//   console.log(this.calculatePrice);
  
// }
onSliderChange(value: number) {
  this.sliderValue = value;
  this.calculatePrice();
}

calculatePrice() {
  this.servicePrice = 65 + this.sliderValue * 25;
}


}
