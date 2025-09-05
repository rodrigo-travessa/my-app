import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationLayerComponent } from './navigation-layer.component';

describe('NavigationLayerComponent', () => {
  let component: NavigationLayerComponent;
  let fixture: ComponentFixture<NavigationLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationLayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
