import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPaginaEstaticaComponent } from './navbar-pagina-estatica.component';

describe('NavbarPaginaEstaticaComponent', () => {
  let component: NavbarPaginaEstaticaComponent;
  let fixture: ComponentFixture<NavbarPaginaEstaticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarPaginaEstaticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPaginaEstaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
