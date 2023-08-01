import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricePlanMaterialComponent } from './price-plan-material.component';

describe('PricePlanMaterialComponent', () => {
  let component: PricePlanMaterialComponent;
  let fixture: ComponentFixture<PricePlanMaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PricePlanMaterialComponent]
    });
    fixture = TestBed.createComponent(PricePlanMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
