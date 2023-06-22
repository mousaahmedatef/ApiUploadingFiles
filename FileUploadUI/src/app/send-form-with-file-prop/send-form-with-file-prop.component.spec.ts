import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendFormWithFilePropComponent } from './send-form-with-file-prop.component';

describe('SendFormWithFilePropComponent', () => {
  let component: SendFormWithFilePropComponent;
  let fixture: ComponentFixture<SendFormWithFilePropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendFormWithFilePropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendFormWithFilePropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
