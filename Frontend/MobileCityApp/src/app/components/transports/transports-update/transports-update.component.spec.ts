import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportsUpdateComponent } from './transports-update.component';

describe('TransportsUpdateComponent', () => {
  let component: TransportsUpdateComponent;
  let fixture: ComponentFixture<TransportsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportsUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
