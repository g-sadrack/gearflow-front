import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCadastro } from './cliente-cadastro';

describe('ClienteCadastro', () => {
  let component: ClienteCadastro;
  let fixture: ComponentFixture<ClienteCadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteCadastro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteCadastro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
