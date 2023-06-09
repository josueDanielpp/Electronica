import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmisorComponent } from './emisor.component';

describe('EmisorComponent', () => {
  let component: EmisorComponent;
  let fixture: ComponentFixture<EmisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmisorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
