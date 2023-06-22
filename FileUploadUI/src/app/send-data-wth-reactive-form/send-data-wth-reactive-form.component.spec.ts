import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendDataWthReactiveFormComponent } from './send-data-wth-reactive-form.component';

describe('SendDataWthReactiveFormComponent', () => {
  let component: SendDataWthReactiveFormComponent;
  let fixture: ComponentFixture<SendDataWthReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendDataWthReactiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendDataWthReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
