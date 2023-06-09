import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FijaComponent } from './fija.component';

describe('FijaComponent', () => {
  let component: FijaComponent;
  let fixture: ComponentFixture<FijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FijaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
