import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoCadastro } from './veiculo-cadastro';

describe('VeiculoCadastro', () => {
  let component: VeiculoCadastro;
  let fixture: ComponentFixture<VeiculoCadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeiculoCadastro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeiculoCadastro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
