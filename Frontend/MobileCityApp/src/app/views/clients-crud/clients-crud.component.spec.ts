import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsCrudComponent } from './clients-crud.component';

describe('ClientsCrudComponent', () => {
  let component: ClientsCrudComponent;
  let fixture: ComponentFixture<ClientsCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
