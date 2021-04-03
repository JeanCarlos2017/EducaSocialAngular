import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTemaComponent } from './home-tema.component';

describe('HomeTemaComponent', () => {
  let component: HomeTemaComponent;
  let fixture: ComponentFixture<HomeTemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
