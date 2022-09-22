import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportsDeleteComponent } from './transports-delete.component';

describe('TransportsDeleteComponent', () => {
  let component: TransportsDeleteComponent;
  let fixture: ComponentFixture<TransportsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportsDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
