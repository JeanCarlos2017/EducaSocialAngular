import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrarCadastroComponent } from './entrar-cadastro.component';

describe('EntrarCadastroComponent', () => {
  let component: EntrarCadastroComponent;
  let fixture: ComponentFixture<EntrarCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrarCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrarCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
