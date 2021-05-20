import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBeerComponent } from './our-beer.component';

describe('OurBeerComponent', () => {
  let component: OurBeerComponent;
  let fixture: ComponentFixture<OurBeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurBeerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
