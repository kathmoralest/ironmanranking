import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromedioTiempoManComponent } from './promedio-tiempo-man.component';

describe('PromedioTiempoManComponent', () => {
  let component: PromedioTiempoManComponent;
  let fixture: ComponentFixture<PromedioTiempoManComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromedioTiempoManComponent]
    });
    fixture = TestBed.createComponent(PromedioTiempoManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
