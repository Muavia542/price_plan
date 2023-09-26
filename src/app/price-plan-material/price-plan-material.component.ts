import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-price-plan-material',
  templateUrl: './price-plan-material.component.html',
  styleUrls: ['./price-plan-material.component.css']
})
export class PricePlanMaterialComponent implements OnInit {
  form!: FormGroup;
  servicePriceNeat: number = 65; // Initial price for Neat plan
  servicePriceLoaded: number = 85; // Initial price for Loaded plan

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      quantity: [0] // Initial value for the slider
    });
  }

  formatLabel(value: number): string {
    return `${value}`;
  }

  calculatePriceNeat(): number {
    const sliderValue = this.form.get('quantity')!.value;
    return this.servicePriceNeat + sliderValue * 35; // Each additional employee is US $35
  }

  calculatePriceLoaded(): number {
    const sliderValue = this.form.get('quantity')!.value;
    return this.servicePriceLoaded + sliderValue * 49; // Each additional employee is US $49
  }
}
