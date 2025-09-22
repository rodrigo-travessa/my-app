import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top2000Component } from './top2000.component';

describe('Top2000Component', () => {
  let component: Top2000Component;
  let fixture: ComponentFixture<Top2000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Top2000Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Top2000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
