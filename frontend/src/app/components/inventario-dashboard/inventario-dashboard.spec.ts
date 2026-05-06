import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioDashboard } from './inventario-dashboard';

describe('InventarioDashboard', () => {
  let component: InventarioDashboard;
  let fixture: ComponentFixture<InventarioDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventarioDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
