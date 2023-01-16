import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCertificadoComponent } from './tabla-certificado.component';

describe('TablaCertificadoComponent', () => {
  let component: TablaCertificadoComponent;
  let fixture: ComponentFixture<TablaCertificadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaCertificadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaCertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
