import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportsReadComponent } from './transports-read.component';

describe('TransportsReadComponent', () => {
  let component: TransportsReadComponent;
  let fixture: ComponentFixture<TransportsReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportsReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportsReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
