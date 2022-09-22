import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentsCrudComponent } from './rents-crud.component';

describe('RentsCrudComponent', () => {
  let component: RentsCrudComponent;
  let fixture: ComponentFixture<RentsCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentsCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentsCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
