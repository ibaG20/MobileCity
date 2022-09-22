import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentsUpdateComponent } from './rents-update.component';

describe('RentsUpdateComponent', () => {
  let component: RentsUpdateComponent;
  let fixture: ComponentFixture<RentsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentsUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
