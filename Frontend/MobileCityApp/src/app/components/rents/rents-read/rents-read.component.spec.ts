import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentsReadComponent } from './rents-read.component';

describe('RentsReadComponent', () => {
  let component: RentsReadComponent;
  let fixture: ComponentFixture<RentsReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentsReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentsReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
