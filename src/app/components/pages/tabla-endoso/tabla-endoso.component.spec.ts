import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEndosoComponent } from './tabla-endoso.component';

describe('TablaEndosoComponent', () => {
  let component: TablaEndosoComponent;
  let fixture: ComponentFixture<TablaEndosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaEndosoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaEndosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
