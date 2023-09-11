import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddAnimalComponent } from './dialog-add-animal.component';

describe('DialogAddAnimalComponent', () => {
  let component: DialogAddAnimalComponent;
  let fixture: ComponentFixture<DialogAddAnimalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogAddAnimalComponent]
    });
    fixture = TestBed.createComponent(DialogAddAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
