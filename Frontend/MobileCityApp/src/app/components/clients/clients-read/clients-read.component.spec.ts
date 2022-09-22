import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsReadComponent } from './clients-read.component';

describe('ClientsReadComponent', () => {
  let component: ClientsReadComponent;
  let fixture: ComponentFixture<ClientsReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
