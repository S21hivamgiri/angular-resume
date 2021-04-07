import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownComboComponent } from './dropdown-combo.component';

describe('DropdownComboComponent', () => {
  let component: DropdownComboComponent;
  let fixture: ComponentFixture<DropdownComboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownComboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
