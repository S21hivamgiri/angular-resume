import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillImgComponent } from './skill-img.component';

describe('SkillImgComponent', () => {
  let component: SkillImgComponent;
  let fixture: ComponentFixture<SkillImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
