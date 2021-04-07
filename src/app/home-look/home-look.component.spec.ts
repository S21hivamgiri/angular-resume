import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLookComponent } from './home-look.component';

describe('HomeLookComponent', () => {
  let component: HomeLookComponent;
  let fixture: ComponentFixture<HomeLookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
