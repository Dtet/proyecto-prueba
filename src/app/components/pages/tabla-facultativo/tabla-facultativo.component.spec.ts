import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaFacultativoComponent } from './tabla-facultativo.component';

describe('TablaFacultativoComponent', () => {
  let component: TablaFacultativoComponent;
  let fixture: ComponentFixture<TablaFacultativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaFacultativoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaFacultativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
