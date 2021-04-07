import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorzTabComponent } from './horz-tab.component';

describe('HorzTabComponent', () => {
  let component: HorzTabComponent;
  let fixture: ComponentFixture<HorzTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorzTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorzTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
