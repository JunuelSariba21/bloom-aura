import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoseGallery } from './rose-gallery';

describe('RoseGallery', () => {
  let component: RoseGallery;
  let fixture: ComponentFixture<RoseGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoseGallery],
    }).compileComponents();

    fixture = TestBed.createComponent(RoseGallery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
