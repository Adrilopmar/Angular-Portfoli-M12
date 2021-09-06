import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsProjectsComponent } from './dialogs-projects.component';

describe('DialogsProjectsComponent', () => {
  let component: DialogsProjectsComponent;
  let fixture: ComponentFixture<DialogsProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogsProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogsProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
