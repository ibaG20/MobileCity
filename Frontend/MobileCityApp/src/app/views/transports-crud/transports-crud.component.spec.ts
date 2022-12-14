import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportsCrudComponent } from './transports-crud.component';

describe('TransportsCrudComponent', () => {
  let component: TransportsCrudComponent;
  let fixture: ComponentFixture<TransportsCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportsCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportsCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
