import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top3FemComponent } from './top3-fem.component';

describe('Top3FemComponent', () => {
  let component: Top3FemComponent;
  let fixture: ComponentFixture<Top3FemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Top3FemComponent]
    });
    fixture = TestBed.createComponent(Top3FemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
