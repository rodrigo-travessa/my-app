import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top1000Component } from './top1000.component';

describe('Top1000Component', () => {
  let component: Top1000Component;
  let fixture: ComponentFixture<Top1000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Top1000Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Top1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
