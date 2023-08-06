import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitulostotalComponent } from './titulostotal.component';

describe('TitulostotalComponent', () => {
  let component: TitulostotalComponent;
  let fixture: ComponentFixture<TitulostotalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitulostotalComponent]
    });
    fixture = TestBed.createComponent(TitulostotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
