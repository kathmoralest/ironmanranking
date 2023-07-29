import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top3MaleComponent } from './top3-male.component';

describe('Top3MaleComponent', () => {
  let component: Top3MaleComponent;
  let fixture: ComponentFixture<Top3MaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Top3MaleComponent]
    });
    fixture = TestBed.createComponent(Top3MaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
