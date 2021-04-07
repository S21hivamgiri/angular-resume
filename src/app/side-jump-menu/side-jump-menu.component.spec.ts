import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideJumpMenuComponent } from './side-jump-menu.component';

describe('SideJumpMenuComponent', () => {
  let component: SideJumpMenuComponent;
  let fixture: ComponentFixture<SideJumpMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideJumpMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideJumpMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
