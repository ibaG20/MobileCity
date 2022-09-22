import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportsCreateComponent } from './transports-create.component';

describe('TransportsCreateComponent', () => {
  let component: TransportsCreateComponent;
  let fixture: ComponentFixture<TransportsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportsCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
