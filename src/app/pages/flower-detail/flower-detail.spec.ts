import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerDetail } from './flower-detail';

describe('FlowerDetail', () => {
  let component: FlowerDetail;
  let fixture: ComponentFixture<FlowerDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowerDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(FlowerDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
