import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Update14Component } from './update-1-4.component';

describe('Update14Component', () => {
  let component: Update14Component;
  let fixture: ComponentFixture<Update14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Update14Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Update14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
