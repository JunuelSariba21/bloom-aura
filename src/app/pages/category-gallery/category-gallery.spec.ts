import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryGalleryComponent} from './category-gallery';

describe('CategoryGallery', () => {
  let component: CategoryGalleryComponent;
  let fixture: ComponentFixture<CategoryGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryGalleryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryGalleryComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
