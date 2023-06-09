import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealimentacionComponent } from './realimentacion.component';

describe('RealimentacionComponent', () => {
  let component: RealimentacionComponent;
  let fixture: ComponentFixture<RealimentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealimentacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealimentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
