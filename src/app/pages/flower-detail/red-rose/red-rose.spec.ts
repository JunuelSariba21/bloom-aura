import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedRose } from './red-rose';

describe('RedRose', () => {
  let component: RedRose;
  let fixture: ComponentFixture<RedRose>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedRose],
    }).compileComponents();

    fixture = TestBed.createComponent(RedRose);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
