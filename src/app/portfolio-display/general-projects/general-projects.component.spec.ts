import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralProjectsComponent } from './general-projects.component';

describe('GeneralProjectsComponent', () => {
  let component: GeneralProjectsComponent;
  let fixture: ComponentFixture<GeneralProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
