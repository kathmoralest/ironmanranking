import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromedioTiempoFemComponent } from './promedio-tiempo-fem.component';

describe('PromedioTiempoFemComponent', () => {
  let component: PromedioTiempoFemComponent;
  let fixture: ComponentFixture<PromedioTiempoFemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromedioTiempoFemComponent]
    });
    fixture = TestBed.createComponent(PromedioTiempoFemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
