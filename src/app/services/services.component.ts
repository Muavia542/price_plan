


import { Component, ViewChild, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSlider } from '@angular/material/slider';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit  {
  sliderValue: number = 1;
  servicePriceNeat: number = 65; 
  servicePriceLoaded:number = 85;
  quantity = 0;

  form: FormGroup;

  formatLabel(value: number): string {
    this.sliderValue = value;
    console.log(this.sliderValue);
    return `${value}Dentist`;
  }
  
  
 
  constructor() {
    this.form = new FormGroup({
      quantity: new FormControl(1)    });
      this.quantity = this.form.get('quantity')!.value;

   }
   ngOnInit(): void {
    this.form.get('quantity')?.valueChanges.subscribe((value: number) => {
      this.quantity = value;
      this.calculatePrice();
    });
  }

  calculatePrice() {
    this.servicePriceNeat = 65 + this.quantity * 35;
    this.servicePriceLoaded = 85 + this.quantity * 49;
  }
  

  
}
