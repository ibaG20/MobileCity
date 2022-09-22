import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentsCreateComponent } from './rents-create.component';

describe('RentsCreateComponent', () => {
  let component: RentsCreateComponent;
  let fixture: ComponentFixture<RentsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentsCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
