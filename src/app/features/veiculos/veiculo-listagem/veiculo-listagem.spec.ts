import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoListagem } from './veiculo-listagem';

describe('VeiculoListagem', () => {
  let component: VeiculoListagem;
  let fixture: ComponentFixture<VeiculoListagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeiculoListagem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeiculoListagem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
