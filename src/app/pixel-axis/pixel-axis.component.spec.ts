import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixelAxisComponent } from './pixel-axis.component';

describe('PixelAxisComponent', () => {
  let component: PixelAxisComponent;
  let fixture: ComponentFixture<PixelAxisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PixelAxisComponent]
    });
    fixture = TestBed.createComponent(PixelAxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
